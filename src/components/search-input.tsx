import React, { ChangeEvent, Fragment, useState } from 'react';
import { LocationData } from '../types';
import debounce from 'lodash/debounce';

// components
import { Combobox, Transition } from '@headlessui/react';
import { Spinner } from './spinner';

// api
import { fetchLocations } from '../app/api';

// icons
import { SelectorIcon, CheckIcon } from '@heroicons/react/solid';

// debounced api wrapper function
const _loadLocations = (
  value: string,
  startCallback: () => void,
  successCallback: (_: any) => void,
  errorCallback: (_: any) => void,
  finallyCallback: () => void
) => {
  // only perform a fetch if there is an actual input value
  if (value === '') return;
  startCallback();
  fetchLocations(value)
    .then((data) => successCallback([...data].reverse()))
    .catch((error) => errorCallback(error.message))
    .finally(() => finallyCallback());
};
const loadLocations = debounce(_loadLocations, 1000);

// prop types
type Props = {
  onChange: (_: LocationData) => void;
};

/**
 * A component that renders
 */
export const SearchInput: React.FC<Props> = ({ onChange }) => {
  // the selected option, updated when the user selects a value from the combobox options
  const [selected, setSelected] = useState<LocationData | null>(null);
  // the input value, updated by typing in the combobox input
  const [input, setInput] = useState<string>('');
  // whether the component is currently fetching data from the api
  const [loading, setLoading] = useState<boolean>(false);
  // the data returned from the api
  const [results, setResults] = useState<LocationData[]>([]);

  const handleSelect = (location: LocationData | null) => {
    if (location) {
      // if there is a location, update state and pass the new location value to the callback provided by the parent component
      setSelected(location);
      onChange(location);
    }
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
    // do not attempt to fetch more locations if a fetch is already in progress
    if (loading) return;
    // fetch locations from the api based on the input value
    loadLocations(
      value,
      () => setLoading(true),
      setResults,
      (err) => console.log(err),
      () => setLoading(false)
    );
  };

  return (
    <div className="w-72 relative">
      <Combobox value={selected} onChange={handleSelect}>
        <Combobox.Label className="inline-block">
          Search for cities:
        </Combobox.Label>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-md bg-white text-left shadow-md focus:outline-none sm:text-sm focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-medBlue-light">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5"
              displayValue={(result: LocationData | null) =>
                result?.name && result?.region
                  ? `${result?.name}, ${result?.region}`
                  : input
              }
              onChange={handleInput}
              disabled={loading}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon className="h-5 w-5" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {loading ? (
                <div className="relative cursor-default select-none py-2 px-4 text-grey-700 flex justify-center items-center">
                  <Spinner size="sm" />
                </div>
              ) : results.length === 0 ? (
                <div className="relative cursor-default select-none py-2 px-4 text-grey-700">
                  No results found
                </div>
              ) : (
                results.map((result) => (
                  <Combobox.Option
                    key={result.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active && 'bg-grey-300'
                      }`
                    }
                    value={result}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {result.name}, {result.region}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="h-5 w-5" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

import React from 'react';
import { render, screen } from '@testing-library/react';

// component
import { Icon } from '../icon';

describe('Icon', () => {
  it('renders icon of thunderstorm', () => {
    render(<Icon code={200} timeOfDay="day" />);
    screen.getByLabelText('thunderstorm');
  });
  it('renders icon of rain', () => {
    render(<Icon code={500} timeOfDay="day" />);
    screen.getByLabelText('rain');
  });
  it('renders icon of winter mix', () => {
    render(<Icon code={511} timeOfDay="day" />);
    screen.getByLabelText('winter mix');
  });
  it('renders icon of snow', () => {
    render(<Icon code={600} timeOfDay="day" />);
    screen.getByLabelText('snow');
  });
  it('renders icon of hail', () => {
    render(<Icon code={611} timeOfDay="day" />);
    screen.getByLabelText('hail');
  });
  it('renders icon of atmospheric weather', () => {
    render(<Icon code={701} timeOfDay="day" />);
    screen.getByLabelText('fog, mist, or other atmospheric condition');
  });
  it('renders icon of clear sun', () => {
    render(<Icon code={800} timeOfDay="day" />);
    screen.getByLabelText('clear weather (day)');
  });
  it('renders icon of clear moon', () => {
    render(<Icon code={800} timeOfDay="night" />);
    screen.getByLabelText('clear weather (night)');
  });
  it('renders icon of cloudy sun', () => {
    render(<Icon code={801} timeOfDay="day" />);
    screen.getByLabelText('partly cloudy (day)');
  });
  it('renders icon of cloudy moon', () => {
    render(<Icon code={801} timeOfDay="night" />);
    screen.getByLabelText('partly cloudy (night)');
  });
  it('renders icon of light clouds', () => {
    render(<Icon code={803} timeOfDay="day" />);
    screen.getByLabelText('cloudy');
  });
  it('renders icon of heavy clouds', () => {
    render(<Icon code={804} timeOfDay="day" />);
    screen.getByLabelText('heavy clouds');
  });

  it('renders icon of rainbow', () => {
    render(<Icon code={100} timeOfDay="day" />);
    screen.getByLabelText('rainbow');
  });
  it('does not render invalid input', () => {
    render(
      <div data-testid="wrapper">
        <Icon code={0} timeOfDay="day" />
      </div>
    );
    expect(screen.getByTestId('wrapper')).toBeEmptyDOMElement();
  });
});

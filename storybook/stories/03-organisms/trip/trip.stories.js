import DrupalAttribute from 'drupal-attribute';
import TripFull from './trip-full.html.twig';
import * as Body from '../../01-atoms/body/body.stories';
import * as Details from '../../01-atoms/details/details.stories';
import * as Map from '../../01-atoms/map/map.stories';
import * as Table from '../../01-atoms/table/table.stories';
import * as PictureWithCaption from '../../02-molecules/picture-with-caption/picture-with-caption.stories';

export default {
  title: 'Design System/Organisms/Trip',
  args: {
    picture: PictureWithCaption.Default({
      ...PictureWithCaption.default.args,
    }),
    details: Details.Default({
      ...Details.default.args,
    }),
    body: Body.Default({
      ...Body.default.args,
    }),
    trip: Table.Default({
      ...Table.default.args,
    }),
    map: Map.Default({
      ...Map.default.args,
    }),
    attributes: new DrupalAttribute(),
  },
};

export const Full = ({ picture, details, body, trip, map, attributes }) =>
  TripFull({
    picture,
    details,
    body,
    trip,
    map,
    attributes,
  });

import PictureWithCaption from './picture-with-caption.html.twig';
import * as Picture from '../../01-atoms/picture/picture.stories';

export default {
  title: 'Design System/Molecules/Picture with caption',
  args: {
    picture: Picture.Default({
      ...Picture.default.args,
    }),
    caption: 'Monviso as seen from Turin',
  },
};

const TemplateWithCaption = ({ picture, caption }) =>
  PictureWithCaption({
    picture,
    caption,
  });

export const Default = TemplateWithCaption.bind({});

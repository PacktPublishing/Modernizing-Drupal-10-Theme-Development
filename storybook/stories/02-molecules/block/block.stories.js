import DrupalAttribute from 'drupal-attribute';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import Block from './block.html.twig';
import BlockMainMenu from './block-menu.html.twig';
import BlockBorder from './block-border.html.twig';
import * as Menu from '../menu/menu.stories';
import './block-menu';

// Add the filters to Twig instance.
twigDrupal(Twig);

export default {
  title: 'Design System/Molecules/Block',
  args: {
    plugin_id: 'Some plugin',
    title_prefix: '',
    title_suffix: '',
    label: "I'm a block!",
    content: 'Lorem ipsum dolor sit amet.',
    configuration: {
      provider: 'Some module',
    },
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};

export const Default = ({
  content,
  pluginId,
  titlePrefix,
  titleSuffix,
  label,
  configuration,
}) =>
  Block({
    attributes: new DrupalAttribute(),
    title_attributes: new DrupalAttribute(),
    pluginId,
    titlePrefix,
    titleSuffix,
    label,
    content,
    configuration,
  });

export const BlockMenu = ({
  pluginId,
  titlePrefix,
  titleSuffix,
  label,
  configuration,
}) =>
  BlockMainMenu({
    attributes: new DrupalAttribute(),
    title_attributes: new DrupalAttribute(),
    pluginId,
    titlePrefix,
    titleSuffix,
    label,
    content: [
      Menu.Main({
        ...Menu.default.args,
      }),
    ],
    configuration,
    derivative_plugin_id: '',
  });

export const WithBorder = ({
  content,
  pluginId,
  titlePrefix,
  titleSuffix,
  label,
  configuration,
}) =>
  BlockBorder({
    attributes: new DrupalAttribute(),
    title_attributes: new DrupalAttribute(),
    pluginId,
    titlePrefix,
    titleSuffix,
    label,
    content,
    configuration,
  });

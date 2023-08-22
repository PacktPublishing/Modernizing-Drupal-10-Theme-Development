<?php

declare(strict_types=1);

namespace Drupal\alps_base\Drush;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drush\Commands\DrushCommands;

/**
 * Base Drush commands.
 */
class BaseCommands extends DrushCommands {

  /**
   * BaseCommands __construct.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entityTypeManager
   *   The entity type manager.
   */
  public function __construct(
    private readonly EntityTypeManagerInterface $entityTypeManager,
  ) {
    parent::__construct();
  }

  /**
   * Set the homepage to a specific node.
   *
   * @command set-homepage
   * @aliases sh
   */
  public function setHomepage($uuid): void {
    $candidates = $this->entityTypeManager->getStorage('node')->loadByProperties(['uuid' => $uuid]);
    $node = reset($candidates);

    $config = \Drupal::service('config.factory')->getEditable('system.site');
    $config->set('page.front', '/node/' . $node->id());
    $config->save();
  }

}

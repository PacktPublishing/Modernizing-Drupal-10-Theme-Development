<?php

namespace Drupal\alps_base;

/**
 *
 */
interface BannerBlockInterface {

  /**
   * @return string
   */
  public function getLink(): string;

  /**
   * @return string
   */
  public function getTitle(): string;

  /**
   * @return string
   */
  public function getImage(): string;

  /**
   * @return string
   */
  public function getCta(): string;

}

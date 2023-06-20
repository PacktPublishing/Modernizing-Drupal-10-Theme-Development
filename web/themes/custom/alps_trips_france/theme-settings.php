<?php

/**
 * @file
 * Functions to support Alps Trips theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 */
function alps_trips_france_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
  $form['alps_trips_france'] = [
    '#type' => 'fieldset',
    '#title' => t('Alps Trips France Configuration'),
  ];

  $form['alps_trips_france']['copyright_2'] = [
    '#type' => 'textfield',
    '#title' => t('Copyright text'),
    '#default_value' => theme_get_setting('copyright_2'),
    '#description' => t('Insert the copyright text that is printed in the footer.'),
    '#required' => TRUE,
  ];

}

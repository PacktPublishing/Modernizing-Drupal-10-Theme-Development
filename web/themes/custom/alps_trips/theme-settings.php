<?php

/**
 * @file
 * Functions to support Alps Trips theme settings.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_FORM_ID_alter() for system_theme_settings.
 */
function alps_trips_form_system_theme_settings_alter(&$form, FormStateInterface $form_state): void {
  $form['alps_trips'] = [
    '#type' => 'fieldset',
    '#title' => t('Alps Trips Configuration'),
  ];

  $form['alps_trips']['copyright'] = [
    '#type' => 'textfield',
    '#title' => t('Copyright text'),
    '#default_value' => theme_get_setting('copyright'),
    '#description' => t('Insert the copyright text.'),
    '#required' => TRUE,
  ];

  $form['alps_trips']['socials'] = [
    '#type' => 'fieldset',
    '#title' => t('Socials'),
  ];

  $form['alps_trips']['socials']['twitter'] = [
    '#type' => 'textfield',
    '#title' => t('Twitter'),
    '#default_value' => theme_get_setting('twitter'),
    '#description' => t('Insert the Twitter url.'),
  ];

  $form['alps_trips']['socials']['facebook'] = [
    '#type' => 'textfield',
    '#title' => t('Facebook'),
    '#default_value' => theme_get_setting('facebook'),
    '#description' => t('Insert the Facebook url.'),
  ];

  $form['alps_trips']['socials']['github'] = [
    '#type' => 'textfield',
    '#title' => t('GitHub'),
    '#default_value' => theme_get_setting('github'),
    '#description' => t('Insert the GitHub url.'),
  ];

}

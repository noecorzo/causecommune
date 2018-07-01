<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 14-03-18
 * Time: 15:31
 */

namespace Drupal\first_module\Plugin\Field\FieldType;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldType;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;

/**
 * Class email
 * @package Drupal\first_module\Plugin\Field\FieldType
 *
 * @FieldType(
 *     id="email_address",
 *     label=@Translation("Email Address"),
 *     description=@Translation("Champ de reseux sociaux"),
 *     category=@Translation("Reseux Sociaux"),
 *     default_widget="email_address_widget",
 *     default_formatter="email_address_formatter"
 *
 * )
 */

class email extends FieldItemBase
{
    public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition)
    {
        $properties = [];
        $properties['email'] = \Drupal\Core\TypedData\DataDefinition::create('string')
            ->setDescription(t('An email address'))
            ->setLabel(t('Email address'));
        return $properties;
    }

    public static function schema(FieldStorageDefinitionInterface $field_definition)
    {
        return [
            'columns' => [
                'email' => [
                    'description' => 'Email address',
                    'type' => 'varchar',
                    'length' => '255',
                    'not null' => TRUE,
                    'default' => ''
                ]
            ]
        ];
    }
}
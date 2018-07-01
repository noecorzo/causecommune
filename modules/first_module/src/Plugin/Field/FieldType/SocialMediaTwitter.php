<?php
/**
 * Created by PhpStorm.
 * User: n.corzo
 * Date: 13-03-18
 * Time: 11:14
 */

namespace Drupal\first_module\Plugin\Field\FieldType;

use Drupal\Core\Annotation\Translation;
use Drupal\Core\Field\Annotation\FieldType;
use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;

/**
 * Class SocialMedia
 * @package Drupal\first_module\Plugin\Field\FieldType
 *
 * @FieldType(
 *     id="socialmedia_twitter",
 *     label=@Translation("Twitter"),
 *     description=@Translation("Champ de reseux sociaux"),
 *     category=@Translation("Reseux Sociaux"),
 *     default_widget="socialmedia_twitter_widget",
 *     default_formatter="socialmedia_twitter_formatter"
 * )
 */

class SocialMediaTwitter extends FieldItemBase
{

    public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition)
    {
        $properties = [];
        $properties['twitter'] = \Drupal\Core\TypedData\DataDefinition::create('string')
            ->setDescription(t('A twitter link'))
            ->setLabel(t('Twitter link'));
        return $properties;
    }

    public static function schema(FieldStorageDefinitionInterface $field_definition)
    {
        return [
            'columns' => [
                'twitter' => [
                    'description' => 'Twitter link',
                    'type' => 'varchar',
                    'length' => '255',
                    'not null' => TRUE,
                    'default' => ''
                ]
            ]
        ];
    }
}
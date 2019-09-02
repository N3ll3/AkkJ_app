<?php

namespace App\Form;

use App\Entity\Bgame;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Entity\Category;
use App\Entity\Difficulty;
use App\Entity\Mechanism;
use FOS\CKEditorBundle\Form\Type\CKEditorType;

class AddBgameFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('Image')
            ->add('description', CKEditorType::class, [
                'config_name' => 'basic_config'
            ])
            ->add('duration',  IntegerType::class)
            ->add(
                'minNbPlayers',
                NumberType::class,
                [
                    'html5' => true,
                ]
            )
            ->add(
                'maxNbPlayers',
                NumberType::class,
                [
                    'html5' => true,
                ]
            )
            ->add(
                'difficulty',
                EntityType::class,
                [
                    'class' => Difficulty::class,
                    'choice_label' => 'name',
                ]
            )

            ->add(
                'mechanism',
                EntityType::class,
                [
                    'class' => Mechanism::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]
            )
            ->add(
                'category',
                EntityType::class,
                [
                    'class' => Category::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => true,
                ]
            )
            ->add('Ajouter', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Bgame::class,
        ]);
    }
}

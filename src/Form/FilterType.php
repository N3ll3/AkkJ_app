<?php

namespace App\Form;

use App\Entity\Filter;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use App\Entity\Category;
use App\Entity\Difficulty;
use App\Entity\Mechanism;

class FilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add(
                'maxDuration',
                IntegerType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => [
                        'placeholder' => 'Durée max'
                    ]

                ]
            )
            ->add(
                'minPlayers',
                IntegerType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => [
                        'placeholder' => 'Minimum de joueurs'
                    ]

                ]
            )
            ->add(
                'maxPlayers',
                IntegerType::class,
                [
                    'required' => false,
                    'label' => false,
                    'attr' => [
                        'placeholder' => 'Max de joueurs'
                    ]

                ]
            )
            ->add(
                'difficulty',
                EntityType::class,
                [
                    'class' => Difficulty::class,
                    'choice_label' => 'Difficulté',
                ]
            )

            ->add(
                'mechanism',
                EntityType::class,
                [
                    'class' => Mechanism::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => false,
                ]
            )
            ->add(
                'category',
                EntityType::class,
                [
                    'class' => Category::class,
                    'choice_label' => 'name',
                    'multiple' => true,
                    'expanded' => false,
                ]
            )
            ->add('A koi kon Joue ?', SubmitType::class);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Filter::class,
            'method' => 'get',
            'csrf_protection' => false
        ]);
    }
}

<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190722163908 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE bgame (id INT AUTO_INCREMENT NOT NULL, difficulty_id INT NOT NULL, theme_id INT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, duration INT NOT NULL, min_nb_players INT NOT NULL, max_nb_players INT NOT NULL, INDEX IDX_27BF3DA0FCFA9DAE (difficulty_id), INDEX IDX_27BF3DA059027487 (theme_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bgame_mechanism (bgame_id INT NOT NULL, mechanism_id INT NOT NULL, INDEX IDX_BC1D512F8E0F7ED4 (bgame_id), INDEX IDX_BC1D512F37CD6DD0 (mechanism_id), PRIMARY KEY(bgame_id, mechanism_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bgame_category (bgame_id INT NOT NULL, category_id INT NOT NULL, INDEX IDX_1E7492268E0F7ED4 (bgame_id), INDEX IDX_1E74922612469DE2 (category_id), PRIMARY KEY(bgame_id, category_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE bgame_player (bgame_id INT NOT NULL, player_id INT NOT NULL, INDEX IDX_311752B98E0F7ED4 (bgame_id), INDEX IDX_311752B999E6F5DF (player_id), PRIMARY KEY(bgame_id, player_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE category (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE difficulty (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE mechanism (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE player (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, access INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE theme (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE bgame ADD CONSTRAINT FK_27BF3DA0FCFA9DAE FOREIGN KEY (difficulty_id) REFERENCES difficulty (id)');
        $this->addSql('ALTER TABLE bgame ADD CONSTRAINT FK_27BF3DA059027487 FOREIGN KEY (theme_id) REFERENCES theme (id)');
        $this->addSql('ALTER TABLE bgame_mechanism ADD CONSTRAINT FK_BC1D512F8E0F7ED4 FOREIGN KEY (bgame_id) REFERENCES bgame (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bgame_mechanism ADD CONSTRAINT FK_BC1D512F37CD6DD0 FOREIGN KEY (mechanism_id) REFERENCES mechanism (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bgame_category ADD CONSTRAINT FK_1E7492268E0F7ED4 FOREIGN KEY (bgame_id) REFERENCES bgame (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bgame_category ADD CONSTRAINT FK_1E74922612469DE2 FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bgame_player ADD CONSTRAINT FK_311752B98E0F7ED4 FOREIGN KEY (bgame_id) REFERENCES bgame (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE bgame_player ADD CONSTRAINT FK_311752B999E6F5DF FOREIGN KEY (player_id) REFERENCES player (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE bgame_mechanism DROP FOREIGN KEY FK_BC1D512F8E0F7ED4');
        $this->addSql('ALTER TABLE bgame_category DROP FOREIGN KEY FK_1E7492268E0F7ED4');
        $this->addSql('ALTER TABLE bgame_player DROP FOREIGN KEY FK_311752B98E0F7ED4');
        $this->addSql('ALTER TABLE bgame_category DROP FOREIGN KEY FK_1E74922612469DE2');
        $this->addSql('ALTER TABLE bgame DROP FOREIGN KEY FK_27BF3DA0FCFA9DAE');
        $this->addSql('ALTER TABLE bgame_mechanism DROP FOREIGN KEY FK_BC1D512F37CD6DD0');
        $this->addSql('ALTER TABLE bgame_player DROP FOREIGN KEY FK_311752B999E6F5DF');
        $this->addSql('ALTER TABLE bgame DROP FOREIGN KEY FK_27BF3DA059027487');
        $this->addSql('DROP TABLE bgame');
        $this->addSql('DROP TABLE bgame_mechanism');
        $this->addSql('DROP TABLE bgame_category');
        $this->addSql('DROP TABLE bgame_player');
        $this->addSql('DROP TABLE category');
        $this->addSql('DROP TABLE difficulty');
        $this->addSql('DROP TABLE mechanism');
        $this->addSql('DROP TABLE player');
        $this->addSql('DROP TABLE theme');
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsModule } from './items/items.module';
import { Item } from './items/item.entity'; // Importar a entidade Item

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:', // Usar o banco de dados em memória
      entities: [Item], // Entidades que serão gerenciadas pelo TypeORM
      synchronize: true, // Sincroniza o banco de dados automaticamente com as entidades
    }),
    ItemsModule, // Importar o módulo ItemsModule para gerenciar os itens
  ],
})
export class AppModule {}

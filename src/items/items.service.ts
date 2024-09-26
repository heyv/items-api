// src/items/items.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  // Função para encontrar todos os itens, com opção de filtrar pelo nome
  async findAll(name?: string): Promise<Item[]> {
    const items = await this.itemsRepository.find();
    if (name) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return items;
  }

  async create(item: Item): Promise<Item> {
    return this.itemsRepository.save(item);
  }

  async findOne(id: string): Promise<Item> {
    return this.itemsRepository.findOneBy({ id });
  }

  async update(id: string, item: Item): Promise<Item> {
    await this.itemsRepository.update(id, item);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}

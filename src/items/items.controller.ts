import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  // Endpoint para obter todos os itens com opção de filtro
  @Get()
  getAllItems(@Query('name') name?: string): Promise<Item[]> {
    return this.itemsService.findAll(name); // Passar o nome para o serviço
  }

  @Post()
  createItem(@Body() item: Item): Promise<Item> {
    return this.itemsService.create(item);
  }

  @Get(':id')
  getItem(@Param('id') id: string): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  updateItem(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemsService.update(id, item);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): Promise<void> {
    return this.itemsService.remove(id);
  }
}

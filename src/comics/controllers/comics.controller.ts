import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ComicsService } from '../services/comics/comics.service';
import { AxiosResponse } from 'axios';

@Controller('comics')
export class ComicsController {

    constructor(private readonly comicsService: ComicsService) {}

    @Get('/')
    getAll(): Promise<AxiosResponse<any[]>> {
        return this.comicsService.findAll();
    }

    @Get(':itemsPerPage/:offset')
    getAllWithPagination(@Param('itemsPerPage', ParseIntPipe) itemsPerPage: number, @Param('offset', ParseIntPipe) offset: number) {
        return this.comicsService.findAllWithPagination(itemsPerPage, offset);
    }

    @Post('/detail')
    getDetail(@Body() dtoComicDetail: DtoComicDetail){

        return this.comicsService.findDetail(dtoComicDetail.urlComicDetail);

    }

}

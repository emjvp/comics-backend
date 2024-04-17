import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { env } from 'process';

@Injectable()
export class ComicsService {
    
    private baseApiUrl: string;

    constructor(private readonly httpService: HttpService) {
        this.baseApiUrl = env.BASE_API_URL;
        
    }

    private readonly logger = new Logger(ComicsService.name);
    

    async findAll(): Promise<AxiosResponse<any[]>> {
        
        const params = { 
            format: 'json',
            api_key: env.API_KEY 
        };

        const { data } = await this.httpService.axiosRef.get(`${this.baseApiUrl}issues`, {params});
        return data;

    }

    async findDetail(detailUrl: string) : Promise<AxiosResponse<any>> {
        
        const params = { 
            api_key: env.API_KEY,
            format: 'json',
        };
        
        const { data } = await this.httpService.axiosRef.get(`${detailUrl}`, {params});
        return data;
    }

    async findAllWithPagination(itemsPerPage: number, offset: number) {

        const params = { 
            api_key: env.API_KEY, 
            format: 'json',
            limit: itemsPerPage,
            offset: offset
        };

        const { data } = await this.httpService.axiosRef.get(`${this.baseApiUrl}issues`, {params});

        return data;
    }


}

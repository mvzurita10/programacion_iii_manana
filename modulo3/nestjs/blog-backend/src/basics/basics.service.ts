import {Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

    getMyFirstGet(): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics',
            function: 'Get Example'
        };
    }

    getConParametros(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics/:parametro',
            function: 'Get con parametros',
            parametroRecibido: parametro
        };
    }

    postFunction(bodyPost: object): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de peticion Post',
            bodyRecibido: bodyPost
        };
    }

    putFunction(bodyPost: object, parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de peticion Put',
            bodyRecibido: bodyPost,
            parametro: parametro
        };
    }

    deleteFunction(parametro: string): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function: 'Ejemplo de peticion Delete',
            parametro: parametro
        };
    }

    calculoTriangulo(body: any): object {
        const result: number = (body.base * body.altura) / 2;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo post',
            function:'Calculo de area de un triangulo',
            parametro: body,
            resultado: result
        };
    }

    areaRectangulo(ancho: number, alto: number): object {
        const result: number = ancho * alto;
        return {
            service: 'Blog-Backend',
            controller: '/basics tipo delete',
            function:'Calculo del area de un rectangulo',
            ancho: ancho,
            alto: alto,
            resultado: result
        };
    }


}



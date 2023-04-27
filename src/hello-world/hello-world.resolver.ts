import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String)
    helloworld(): string {
        return 'Hola mundo'
    }

    @Query(() => Float, { name: 'randomNumber' })
    getRandomNumber(): number {
        return Math.random() * 100
    }

    @Query(() => Int, { name: 'randomFromZeroTo', description: 'From Zero to argument TO (default 5)' })
    getRandomFromZeroTo(
        @Args('to', { nullable: true, type: () => Int }) to: number = 5
    ): number {
        return Math.floor(Math.random() * to)
    }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ArticleModule } from './article/article.module';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [LoginModule, ArticleModule, FaqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';
import { UpdateFaqDto } from './dto/update-faq.dto';

@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @Post()
  create(@Body() createFaqDto: CreateFaqDto) {
    return {
      statusCode: 201,
      message: 'FAQ created successfully',
      data: {
        message: 'Data created successfully',
      },
    };
  }

  @Get()
  findAll() {
    return {
      statusCode: 200,
      message: 'The request has succeeded',
      data: {
        items: [
          {
            faqId: 30,
            question: 'what is share?',
            answer:
              'Shares are units of equity ownership interest in a corporation that exist as a financial asset providing for an equal distribution in any residual profits, if any are declared, in the form of dividends. shareholders may also enjoy capital gains if th',
            position: 'commodity',
            creationDate: 1616079463,
            modificationDate: 1616743633,
            isActive: true,
          },
          {
            faqId: 31,
            question: 'test question',
            answer: 'test answer',
            position: 'market',
            creationDate: 1616743181,
            modificationDate: 1616743446,
            isActive: true,
          },
          {
            faqId: 32,
            question: 'aaaa',
            answer: 'aaaa',
            position: 'derivatives',
            creationDate: 1616743405,
            modificationDate: 1616743405,
            isActive: true,
          },
          {
            faqId: 21,
            question: 'What is Sensex ?',
            answer: 'sensex is ....',
            position: 'commodity',
            creationDate: 1614929386,
            modificationDate: 1616562312,
            isActive: true,
          },
          {
            faqId: 29,
            question: 'what is stock market ?',
            answer: 'stock Market .....',
            position: 'market',
            creationDate: 1615889383,
            modificationDate: 1615889383,
            isActive: true,
          },
          {
            faqId: 28,
            question: 'What is Nifty ?',
            answer: 'nifty  ',
            position: 'market',
            creationDate: 1615889356,
            modificationDate: 1615889356,
            isActive: true,
          },
          {
            faqId: 27,
            question: 'What is Sensex ?',
            answer: 'Sensex Rises upon Market...',
            position: 'market',
            creationDate: 1615889088,
            modificationDate: 1615889088,
            isActive: true,
          },
          {
            faqId: 22,
            question: 'what is Nifty 50 ',
            answer: 'nifty 50 is ... ',
            position: 'IPO',
            creationDate: 1614929488,
            modificationDate: 1614929604,
            isActive: true,
          },
          {
            faqId: 24,
            question: 'what is stock market ?',
            answer: 'stock market is ..',
            position: 'IPO',
            creationDate: 1614929586,
            modificationDate: 1614929604,
            isActive: true,
          },
          {
            faqId: 23,
            question: 'what is Nifty 50 ',
            answer: 'nifty 50 is ... ',
            position: 'IPO',
            creationDate: 1614929488,
            modificationDate: 1614929488,
            isActive: true,
          },
        ],
        meta: {
          totalItems: 13,
          itemCount: 10,
          itemsPerPage: 10,
          totalPages: 2,
          currentPage: 1,
        },
      },
    };
    // return this.faqService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.faqService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFaqDto: UpdateFaqDto) {
  //   return this.faqService.update(+id, updateFaqDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.faqService.remove(+id);
  // }
}

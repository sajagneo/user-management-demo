import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  create(@Body() createArticleDto: CreateArticleDto) {
    return {
      statusCode: 201,
      message: 'Article created successfully',
      data: {
        message: 'Data created successfully',
      },
    };
  }

  @Get()
  findAll() {
    return {
      statusCode: 200,
      message: 'Success',
      data: {
        items: [
          {
            articleId: '89a41b88-1743-449a-b3e8-8e50c57c3990',
            oldArticleId: null,
            heading1:
              'MTAR Technologies IPO best so far in 2021; Oversubscribed by 200.79 times, HNIs portion subscribed by 651 times',
            subHeading:
              'MTAR Technologies IPO best so far in 2021; Oversubscribed by 200.79 times, HNIs portion subscribed by 651 times',
            description:
              'MTAR Technologies recorded a stellar demand on the last day of its initial public offering (IPO) with investors subscribing to the issue by 200.79 times. The IPO was launched on March 03 and finished on Friday.',
            articleUrl: 'test',
            tags: '#MTAR, #stellar,#bitcoin',
            placeName: 'Chandigadh',
            metaTitle:
              'MTAR Technologies is a leading national player in the precision engineering industry engaged in the manufacture of mission-critical precision',
            metaDescription:
              'MTAR Technologies is a leading national player in the precision engineering industry engaged in the manufacture of mission-critical precision',
            metaKeywords:
              'MTAR Technologies is a leading national player in the precision engineering industry engaged in the manufacture of mission-critical precision',
            sourceId: 4,
            sourceTitle: 'Indian express',
            authorId: 4,
            author: 'Tushar Agarwal',
            publishedDate: 1616697000,
            comment: null,
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616758481,
            modifiedBy: 123,
            modificationDate: 1616758481,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: 'fbb5761b-dd4b-414e-bf18-65145bda8761',
            oldArticleId: null,
            heading1: 'HFCL has bagged an order worth Rs221.16cr',
            subHeading: 'HFCL has bagged an order worth Rs221.16cr',
            description: 'HFCL has bagged an order worth Rs221.16cr',
            articleUrl: null,
            tags: 'india,economy',
            placeName: 'delhi',
            metaTitle: 'HFCL has bagged an order worth Rs221.16cr',
            metaDescription: 'ICRA and CRISIL reaffirm A1+ rating on PNB ',
            metaKeywords: '#tata',
            sourceId: 1,
            sourceTitle: 'IIFFL',
            authorId: 1,
            author: 'Rajan',
            publishedDate: 1234,
            comment: 'not good',
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616038915,
            modifiedBy: 123,
            modificationDate: 1616750515,
            isActive: false,
            isDelete: false,
          },
          {
            articleId: 'baba1ff5-cdf8-4dd1-977c-942ed70739bb',
            oldArticleId: null,
            heading1:
              'Companies like Maruti Suzuki and Hero MotoCorp have announced to hike price',
            subHeading:
              'Companies like Maruti Suzuki and Hero MotoCorp have announced to hike price',
            description:
              'Ducon said that the scope includes complete Design & Engineering, Supply, Erection and Commissioning of Alumina Handling System, for refinery expansion.',
            articleUrl:
              'https://www.indiainfoline.com/article/news-sector-automobiles-ancillaries/nifty-auto-rallies-2-as-focus-shifts-on-price-hikes-and-monthly-sales-data-tata-motors-bajaj-auto-drives-121032600380_1.html',
            tags: 'string',
            placeName: 'mumbai',
            metaTitle:
              'Companies like Maruti Suzuki and Hero MotoCorp have announced to hike price',
            metaDescription:
              'Ducon said that the scope includes complete Design & Engineering, Supply, Erection and Commissioning of Alumina Handling System, for refinery expansion.',
            metaKeywords:
              'Ducon said that the scope includes complete Design & Engineering, Supply, Erection and Commissioning of Alumina Handling System, for refinery expansion.',
            sourceId: 1,
            sourceTitle: 'Livemint',
            authorId: 2,
            author: 'Mr. Nirmal Jain',
            publishedDate: 1616005800,
            comment: null,
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616011362,
            modifiedBy: 13,
            modificationDate: 1616749998,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: '15c79894-b82d-415c-8c45-ef898e81f7be',
            oldArticleId: null,
            heading1:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            subHeading:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            description:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            articleUrl: 'ICRA and CRISIL reaffirm A1+ rating on',
            tags: '#india,#economy',
            placeName: 'delhi',
            metaTitle:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            metaDescription:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            metaKeywords: '#tata',
            sourceId: 1,
            sourceTitle: 'IIFFL',
            authorId: 1,
            author: 'Rajan',
            publishedDate: 1234,
            comment: 'not good',
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616748991,
            modifiedBy: 123,
            modificationDate: 1616748991,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: '2f7351b5-dba6-4872-a8e5-c3196aa79019',
            oldArticleId: null,
            heading1:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            subHeading:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            description:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            articleUrl: 'ICRA and CRISIL reaffirm A1+ rating on',
            tags: '#india,#economy',
            placeName: 'delhi',
            metaTitle:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            metaDescription:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            metaKeywords: '#tata',
            sourceId: 1,
            sourceTitle: 'IIFFL',
            authorId: 1,
            author: 'Rajan',
            publishedDate: 1234,
            comment: 'not good',
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616748863,
            modifiedBy: 123,
            modificationDate: 1616748863,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: '63ae6b11-f488-4966-bd7e-e995e266d09e',
            oldArticleId: null,
            heading1:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            subHeading: 'The index has soared to an intraday high of 9,846.10.',
            description:
              'The index has soared to an intraday high of 9,846.10.',
            articleUrl: 'test',
            tags: 'maruti, price, hike, suzuki',
            placeName: 'Pune',
            metaTitle:
              'Nifty Auto rallies 2% as focus shifts on price hikes and monthly sales data; Tata Motors, Bajaj Auto drives',
            metaDescription:
              'The index has soared to an intraday high of 9,846.10.',
            metaKeywords:
              'The index has soared to an intraday high of 9,846.10.',
            sourceId: 4,
            sourceTitle: 'Indian express',
            authorId: 2,
            author: 'Mr. Nirmal Jain',
            publishedDate: 1616697000,
            comment: null,
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616748535,
            modifiedBy: 123,
            modificationDate: 1616748535,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: '2a383321-0e0f-4ee6-9a80-7c438e9a6efc',
            oldArticleId: null,
            heading1:
              'Four pharma companies invest in ABCD Technologies; Sun Pharma, Torrent Pharma and Cadila surge 1-2% while Lupin dips',
            subHeading:
              'Four pharma companies invest in ABCD Technologies; Sun Pharma, Torrent Pharma and Cadila surge 1-2% while Lupin dips',
            description:
              'Four pharma companies invest in ABCD Technologies; Sun Pharma, Torrent Pharma and Cadila surge 1-2% while Lupin dips',
            articleUrl: 'ICRA and CRISIL reaffirm A1+ rating on',
            tags: '#india,#economy',
            placeName: 'delhi',
            metaTitle: 'HFCL has bagged an order worth Rs221.16cr',
            metaDescription: 'ICRA and CRISIL reaffirm A1+ rating on PNB ',
            metaKeywords: '#tata',
            sourceId: 1,
            sourceTitle: 'IIFFL',
            authorId: 1,
            author: 'Rajan',
            publishedDate: 1234,
            comment: 'not good',
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616748409,
            modifiedBy: 123,
            modificationDate: 1616748409,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: '213f86fd-167a-4201-b897-056eb6f4518d',
            oldArticleId: null,
            heading1:
              'Bajaj Auto and Pierer Mobility join hands to develop electric products in the 2-wheelers segment; Stock rises over 3%',
            subHeading:
              'Bajaj Auto and Pierer Mobility join hands to develop electric products in the 2-wheelers segment; Stock rises over 3%',
            description: 'HFCL has bagged an order worth Rs221.16cr',
            articleUrl: 'ICRA and CRISIL reaffirm A1+ rating on',
            tags: '#india,#economy',
            placeName: 'delhi',
            metaTitle: 'HFCL has bagged an order worth Rs221.16cr',
            metaDescription: 'ICRA and CRISIL reaffirm A1+ rating on PNB ',
            metaKeywords: '#tata',
            sourceId: 1,
            sourceTitle: 'IIFFL',
            authorId: 1,
            author: 'Rajan',
            publishedDate: 1234,
            comment: 'not good',
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616748099,
            modifiedBy: 123,
            modificationDate: 1616748099,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: '4c9e09c6-f71a-40c3-a485-fca5e7f55cbc',
            oldArticleId: null,
            heading1:
              'Srikalahasthi Pipes resumes plant operations; stock ends lower',
            subHeading:
              'The company’s plant was under shutdown after workmen related to Transport service provider had stopped work.',
            description:
              'The company had informed the exchanges earlier that a group of workmen related to the Transport service provider stopped work due to the that the DI Pipe Plant including all other backward and forward integration plants of the company are under temporary shutdown from March 11, 2021.',
            articleUrl: null,
            tags: '#sales, #stock',
            placeName: 'Mumbai',
            metaTitle:
              'Srikalahasthi Pipes resumes plant operations; stock ends lower',
            metaDescription:
              'The company’s plant was under shutdown after workmen related to Transport service provider had stopped work.',
            metaKeywords:
              'The company’s plant was under shutdown after workmen related to Transport service provider had stopped work.',
            sourceId: 2,
            sourceTitle: 'DRDO',
            authorId: 5,
            author: 'Deepak Bhawnani',
            publishedDate: 1616351400,
            comment: null,
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616410621,
            modifiedBy: 123,
            modificationDate: 1616410621,
            isActive: true,
            isDelete: false,
          },
          {
            articleId: 'c3889a35-99df-4c56-911b-95780573584d',
            oldArticleId: null,
            heading1: 'The BMW Group has ambitious plans for 2021',
            subHeading: 'The BMW Group has ambitious plans for 2021',
            description: 'The BMW Gr has ambitious plans for 2021',
            articleUrl: null,
            tags: '#BMW #CAR #Automibile #Motor',
            placeName: 'Pune',
            metaTitle: 'The BMW Group has ambitious plans for 2021',
            metaDescription: 'The BMW Group has ambitious plans for 2021',
            metaKeywords: 'The BMW Group has ambitious plans for 2021',
            sourceId: 1,
            sourceTitle: 'IIFL',
            authorId: 6,
            author: 'Khushal V Vora',
            publishedDate: 1616005800,
            comment: null,
            articleStatus: 'published',
            createdBy: 123,
            creationDate: 1616077573,
            modifiedBy: 13,
            modificationDate: 1616393284,
            isActive: true,
            isDelete: false,
          },
        ],
        meta: {
          totalItems: 21,
          itemCount: 10,
          itemsPerPage: 10,
          totalPages: 3,
          currentPage: 1,
        },
      },
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.articleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
  //   return this.articleService.update(+id, updateArticleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.articleService.remove(+id);
  // }
}

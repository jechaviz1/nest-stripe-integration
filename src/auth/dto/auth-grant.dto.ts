import { ApiProperty } from '@nestjs/swagger';

export class AuthGrantDto {
  @ApiProperty({
    description: 'The access token.',
  })
  readonly access_token: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }
}

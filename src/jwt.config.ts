export const JWTConfig: any = {
  useFactory: () => ({
    signOptions: {
      expiresIn: '24h',
    },
    secret: '52D3281574E6D1CC791B76E4983DA',
  }),
};

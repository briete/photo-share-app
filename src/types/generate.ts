import {
    GraphQLResolveInfo,
    GraphQLScalarType,
    GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
    { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
    [X in Exclude<keyof T, K>]?: T[X];
} &
    { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
};

export type AuthPayload = {
    __typename?: 'AuthPayload';
    token: Scalars['String'];
    user: User;
};

export type Mutation = {
    __typename?: 'Mutation';
    postPhoto: Photo;
    githubAuth: AuthPayload;
};

export type MutationPostPhotoArgs = {
    input: PostPhotoInput;
};

export type MutationGithubAuthArgs = {
    code: Scalars['String'];
};

export type Photo = {
    __typename?: 'Photo';
    photoId: Scalars['ID'];
    url?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    category?: Maybe<PhotoCategory>;
    userId?: Maybe<Scalars['String']>;
    postedBy?: Maybe<User>;
};

export enum PhotoCategory {
    Selfie = 'SELFIE',
    Portrait = 'PORTRAIT',
    Action = 'ACTION',
    Landscape = 'LANDSCAPE',
    Graphic = 'GRAPHIC',
}

export type PostPhotoInput = {
    name: Scalars['String'];
    category?: Maybe<PhotoCategory>;
    description?: Maybe<Scalars['String']>;
};

export type Query = {
    __typename?: 'Query';
    me?: Maybe<User>;
    totalPhotos?: Maybe<Scalars['Int']>;
    allPhotos: Array<Photo>;
    totalUsers: Scalars['Int'];
    allUsers: Array<User>;
};

export type QueryAllPhotosArgs = {
    after?: Maybe<Scalars['DateTime']>;
};

export type User = {
    __typename?: 'User';
    userId: Scalars['ID'];
    githubLogin: Scalars['ID'];
    githubToken: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    avatar?: Maybe<Scalars['String']>;
    postedPhotos: Array<Photo>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs,
> {
    subscribe: SubscriptionSubscribeFn<
        { [key in TKey]: TResult },
        TParent,
        TContext,
        TArgs
    >;
    resolve?: SubscriptionResolveFn<
        TResult,
        { [key in TKey]: TResult },
        TContext,
        TArgs
    >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
    TResult,
    TKey extends string,
    TParent,
    TContext,
    TArgs,
> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
    TResult,
    TKey extends string,
    TParent = {},
    TContext = {},
    TArgs = {},
> =
    | ((
          ...args: any[]
      ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
    obj: T,
    context: TContext,
    info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
    TResult = {},
    TParent = {},
    TContext = {},
    TArgs = {},
> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
    AuthPayload: ResolverTypeWrapper<AuthPayload>;
    String: ResolverTypeWrapper<Scalars['String']>;
    DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
    Mutation: ResolverTypeWrapper<{}>;
    Photo: ResolverTypeWrapper<Photo>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    PhotoCategory: PhotoCategory;
    PostPhotoInput: PostPhotoInput;
    Query: ResolverTypeWrapper<{}>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    User: ResolverTypeWrapper<User>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
    AuthPayload: AuthPayload;
    String: Scalars['String'];
    DateTime: Scalars['DateTime'];
    Mutation: {};
    Photo: Photo;
    ID: Scalars['ID'];
    PostPhotoInput: PostPhotoInput;
    Query: {};
    Int: Scalars['Int'];
    User: User;
    Boolean: Scalars['Boolean'];
}>;

export type AuthPayloadResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload'],
> = ResolversObject<{
    token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig
    extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
    name: 'DateTime';
}

export type MutationResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
    postPhoto?: Resolver<
        ResolversTypes['Photo'],
        ParentType,
        ContextType,
        RequireFields<MutationPostPhotoArgs, 'input'>
    >;
    githubAuth?: Resolver<
        ResolversTypes['AuthPayload'],
        ParentType,
        ContextType,
        RequireFields<MutationGithubAuthArgs, 'code'>
    >;
}>;

export type PhotoResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo'],
> = ResolversObject<{
    photoId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    description?: Resolver<
        Maybe<ResolversTypes['String']>,
        ParentType,
        ContextType
    >;
    category?: Resolver<
        Maybe<ResolversTypes['PhotoCategory']>,
        ParentType,
        ContextType
    >;
    userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    postedBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
    me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
    totalPhotos?: Resolver<
        Maybe<ResolversTypes['Int']>,
        ParentType,
        ContextType
    >;
    allPhotos?: Resolver<
        Array<ResolversTypes['Photo']>,
        ParentType,
        ContextType,
        RequireFields<QueryAllPhotosArgs, never>
    >;
    totalUsers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
    allUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type UserResolvers<
    ContextType = any,
    ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
    userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    githubLogin?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
    githubToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    postedPhotos?: Resolver<
        Array<ResolversTypes['Photo']>,
        ParentType,
        ContextType
    >;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
    AuthPayload?: AuthPayloadResolvers<ContextType>;
    DateTime?: GraphQLScalarType;
    Mutation?: MutationResolvers<ContextType>;
    Photo?: PhotoResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

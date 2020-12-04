import React from 'react'
import {
  HomePage,
  ProductPage,
  NewsPage,
  IntroducePage,
  NewsCategoryPages,
  NewsDetailPage,
  ProductCategoryPage,
  IntroduceDetailPage,
  ShoppingCartPage,
  PayShoppingPage,
  FinishShoppingPage,
  ProductAdminPage,
  HomeAdminPage,
  ProductCreateEditAdminPage,
  NewsAdminPage,
  ProductViewAdminPage,
  CategoryAdminPage,
  CategoryCreatedEditAdminPage,
  OrderAdminPage,
  OrderCreatedEditAdmin,
  NewsCreateEditAdminPage,
  SlideAdminPage,
  SlideCreateEditAdminPage,
  BrandAdminPage,
  BrandCreateEditPage,
  UserAdminPage,
  UserCreateEditPage,
  NewsViewPage,
} from '../containers/pages'
import ForgetPassWord from '../containers/pages/forgetPassWord/ForgetPassWord'
import RegisterPage from '../containers/pages/registerPage/RegisterPage'
import LoginPage from '../containers/pages/loginPage/LoginPage'
import ContactPage from '../containers/pages/contactpage/ContactPage'
import ProducDetailPage from '../containers/pages/productdetailPage/ProducDetailPage'
import CheckOrderPage from '../containers/pages/checkOrderPage/CheckOrderPage'
import MyCartPage from '../containers/pages/myCartPage/MyCartPage'
import MyCartDetailPage from '../containers/pages/myCartDetailPage/MyCartDetailPage'
import ChangePassWordPage from '../containers/pages/changePassWordPage/ChangePassWordPage'

export const routes_not_auth = [
  {
    path: '/home',
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: '/product',
    exact: true,
    main: () => <ProductPage />,
  },
  {
    path: '/product-category',
    exact: true,
    main: () => <ProductCategoryPage />,
  },
  {
    path: '/news',
    exact: true,
    main: () => <NewsPage />,
  },
  {
    path: '/news-category',
    exact: true,
    main: () => <NewsCategoryPages />,
  },
  {
    path: '/news-detail',
    exact: true,
    main: () => <NewsDetailPage />,
  },
  {
    path: '/introduce',
    exact: true,
    main: () => <IntroducePage />,
  },
  {
    path: '/introduce-detail/:title',
    exact: true,
    main: ({ match, history }) => <IntroduceDetailPage match={match} history={history} />,
  },
  {
    path: '/shopping-cart',
    exact: true,
    main: () => <ShoppingCartPage />,
  },
  {
    path: '/pay-shopping',
    exact: true,
    main: () => <PayShoppingPage />,
  },
  {
    path: '/finish',
    exact: true,
    main: () => <FinishShoppingPage />,
  },
  {
    path: '/forgetPassWord',
    exact: true,
    main: () => <ForgetPassWord />,
  },
  {
    path: '/registerPage',
    exact: true,
    main: () => <RegisterPage />,
  },
  {
    path: '/loginPage',
    exact: true,
    main: (history) => <LoginPage history={history} />,
  },
  {
    path: '/contactPage',
    exact: true,
    main: () => <ContactPage />,
  },
  {
    path: '/productdetail',
    exact: true,
    main: () => <ProducDetailPage />,
  },
  {
    path: '/checkorder',
    exact: true,
    main: () => <CheckOrderPage />,
  },
  {
    path: '/mycart',
    exact: true,
    main: () => <MyCartPage />,
  },
  {
    path: '/mycartdetail',
    exact: true,
    main: () => <MyCartDetailPage />,
  },
  {
    path: '/changepassword',
    exact: true,
    main: () => <ChangePassWordPage />,
  },
]

export const routes_auth = [
  {
    path: '/admin',
    exact: true,
    main: () => <HomeAdminPage />,
  },
  {
    path: '/admin/product',
    exact: true,
    main: () => <ProductAdminPage />,
  },
  {
    path: '/admin/product/created',
    exact: true,
    main: () => <ProductCreateEditAdminPage />,
  },
  {
    path: '/admin/product/:id',
    exact: true,
    main: () => <ProductCreateEditAdminPage />,
  },
  {
    path: '/admin/product/:id/view',
    exact: true,
    main: () => <ProductViewAdminPage />,
  },
  {
    path: '/admin/category',
    exact: true,
    main: ({location, history}) => <CategoryAdminPage location={location} history={history} />,
  },
  {
    path: '/admin/category/created',
    exact: true,
    main: () => <CategoryCreatedEditAdminPage />,
  },
  {
    path: '/admin/category/:id/edit',
    exact: true,
    main: () => <CategoryCreatedEditAdminPage />,
  },
  {
    path: '/admin/order',
    exact: true,
    main: () => <OrderAdminPage />,
  },
  {
    path: '/admin/order/:id/edit',
    exact: true,
    main: () => <OrderCreatedEditAdmin />,
  },
  {
    path: '/admin/news',
    exact: true,
    main: ({ history, location, match }) => <NewsAdminPage history={history} location={location} match={match} />,
  },
  {
    path: '/admin/news/created',
    exact: true,
    main: ({ history, match }) => <NewsCreateEditAdminPage history={history} match={match} />,
  },
  {
    path: '/admin/news/edit/:id',
    exact: true,
    main: ({ history, match }) => <NewsCreateEditAdminPage history={history} match={match} />,
  },
  {
    path: '/admin/news/:id',
    exact: true,
    main: ({ history, match }) => <NewsViewPage history={history} match={match} />,
  },
  {
    path: '/admin/slide',
    exact: true,
    main: () => <SlideAdminPage />,
  },
  {
    path: '/admin/slide/created',
    exact: true,
    main: () => <SlideCreateEditAdminPage />,
  },
  {
    path: '/admin/slide/edit/:id',
    exact: true,
    main: () => <SlideCreateEditAdminPage />,
  },
  {
    path: '/admin/brand',
    exact: true,
    main: () => <BrandAdminPage />,
  },
  {
    path: '/admin/brand/created',
    exact: true,
    main: () => <BrandCreateEditPage />,
  },
  {
    path: '/admin/brand/edit/:id',
    exact: true,
    main: () => <BrandCreateEditPage />,
  },
  {
    path: '/admin/user',
    exact: true,
    main: () => <UserAdminPage />,
  },
  {
    path: '/admin/user/created',
    exact: true,
    main: () => <UserCreateEditPage />,
  },
  {
    path: '/admin/user/edit/:id',
    exact: true,
    main: () => <UserCreateEditPage />,
  },
]

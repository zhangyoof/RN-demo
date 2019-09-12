const API = 'http://bimcloud-test.gcnao.cn:8080/jsbimpro-dp-service';
const API2 = 'http://bimcloud-test.gcnao.cn:8080/jsbimapp-system-service';

const ROOT_API = 'http://cloud-test.gcnao.cn:8080';

const appUrlConfig = {
  name: '三维BIM协同管理平台',
  prefix: 'bim',
  footerText: '三维BIM协同管理平台 © 2017 create by szewec',
  logo: '/logo.png',
  openPages: ['/'],
  apiPrefix: '/api',
  PAGE_SIZE: 20,
  ISSUE_PAGE_SIZE: 30,
  TREE_INDENT_SIZE: 10,
  TSP_PAGE_SIZE:25,
  ASSESS_PAGE_SIZE:25,
  ASSESS_DETAILS_PAGE_SIZE:9999,
  TABLE_SIZE: 'default',
  TABLE_BORDER: true,
  TABLE_COMPONENT_SIZE: 'default',
  TABLE_COMPONENT_HEAD: true,
  MASK_CLOSABLE: false,
  ROUTE_TOOL_LIMIT: false,       // 工具按钮权限启动开关
  DELAY_LOADING: 1000,
  MENU_ICON_LENGTH: 12,
  API,
  token:'',
  toast: {
    networkError: '网络请求异常！'
  },
  login: {
   userLogin: `${ROOT_API}/account/appLogin`
  },
  addressBook: { // 通讯录
   getCompanyContractList: `${API2}/contacts/getMyUnitContactsList`,
  }
};

export default appUrlConfig;

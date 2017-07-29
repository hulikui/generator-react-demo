import { addLocaleData } from 'react-intl'
import localeData from 'react-intl/locale-data/zh'
import messages from './zh-CN.messages'

addLocaleData([...localeData]);

export default {
    lang: 'zh-CN',
    localeData: localeData,
    messages: messages,
}

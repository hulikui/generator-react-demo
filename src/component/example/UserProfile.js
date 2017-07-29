import React, {Component} from 'react';
import {Avatar, Input, Popover, Icon} from 'antd';
import {injectIntl} from 'react-intl';

const Search = Input.Search;


class UserProfile extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {getUserProfile} = this.props;
    getUserProfile('hulikui');
  }

  render() {
    const {userProfile, getUserProfile} = this.props;
    const infoList = (content) => {
      return  <ul className="person-info">
        <li><Icon type="user" /> <label>{content.name}</label></li>
        <li><Icon type="idcard" /><label>{content.company}</label></li>
        <li><Icon type="environment" /><label>{content.location}</label></li>
        <li>
          <Icon type="link" /><a href={content.html_url} target="_blank">github</a>
        </li>
      </ul>
    }
    return <div className="user-info">
        <span>
          <Search
            placeholder="search github username"
            style={{width: 200}}
            onSearch={e => getUserProfile(e.target.value)}
          />
        </span>
      <Popover content={infoList(userProfile)} title="Github User Profile">
        <Avatar src={userProfile.avatar_url} />
      </Popover>
      </div>
  }
}

export default injectIntl(UserProfile);
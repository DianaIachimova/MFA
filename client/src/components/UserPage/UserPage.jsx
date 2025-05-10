import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Card, Typography, Switch, Space, Divider } from 'antd';
import { toggle2FA } from '../../store/actions/user.action';

const { Title, Text } = Typography;

const UserPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, email, twoFactorEnabled } = useSelector(state => state.user);

  const handle2FAToggle = (checked) => {
    dispatch(toggle2FA(checked));
  };

  return (
    <div style={{ padding: '24px' }}>
      <Card>
        <Title level={2}>{t('userPage.personalInfo')}</Title>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Text strong>{t('userPage.username')}:</Text>
            <Text> {username}</Text>
          </div>
          <div>
            <Text strong>{t('userPage.email')}:</Text>
            <Text> {email}</Text>
          </div>
          
          <Divider />
          
          <div>
            <Title level={3}>{t('userPage.security')}</Title>
            <Space>
              <Text>{t('userPage.twoFactorAuth')}</Text>
              <Switch 
                checked={twoFactorEnabled} 
                onChange={handle2FAToggle}
              />
            </Space>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default UserPage; 
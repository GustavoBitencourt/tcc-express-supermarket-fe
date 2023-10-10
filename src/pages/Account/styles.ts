import styled from 'styled-components'

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const TopBar = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  height: 13vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 28px;
`

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`

export const TopBarText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 1.25rem;
`
export const ProfileText = styled.div`
  color: ${({ theme }) => theme.colors.blackgray};
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  margin-left: 0.5rem;
`

export const SettingsIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-top: 1rem;
`

export const UserInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 8px 24px 0px rgba(112, 144, 176, 0.2);
  margin: auto;
  margin-top: -6.5vh;
  width: 94%;
  height: 14%;
  flex-shrink: 0;
`

export const ProfileIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-right: 10px;
  margin-left: 0.75rem;
`

export const NotificationIcon = styled.img`
  width: 18px;
  height: 25px;
  margin-left: auto;
  margin-right: 1rem;
`

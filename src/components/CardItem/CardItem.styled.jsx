import styled from '@emotion/styled';

export const Background = styled.div`
  position: relative;
  width: 100%;
`;

export const Cover = styled.img`
  margin: 0 auto;
  box-sizing: border-box;
  height: 168px;
  width: 308px;
  margin: 28px 36px 0 36px;
`;

export const Logo = styled.svg`
  position: absolute;
  top: 20px;
  left: 20px;
  fill: rgba(255, 255, 255, 0.3);
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  margin: 0;
  border-radius: 50%;
  box-shadow: 0px 0px 25px -3px rgba(0, 0, 0, 0.75);
`;

export const Circle = styled.div`
  position: absolute;
  left: 150px;
  top: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebd8ff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 1.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Line = styled.span`
  position: absolute;
  left: 0;
  top: 214px;
  height: 8px;
  width: 100%;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 75px;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 13px;
  :first-of-type {
    margin-bottom: 8px;
    font-size: 24px;
    text-decoration: underline;
  }
  :last-child {
    margin-bottom: 26;
  }
  color: #ebd8ff;
`;

export const Button = styled.button`
  padding: 14px 28px;
  gap: 6px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
  }

  &.active {
    background: #5cd3a8;
  }
`;

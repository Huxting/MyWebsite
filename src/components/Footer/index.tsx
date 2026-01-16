import { message, Popover } from "antd";
import {
  WechatOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./index.css";

export default function Footer() {
  const [messageApi, contextHolder] = message.useMessage();
  const WECHAT_ID = "hxting2029";
  const EMAIL_ADDRESS = "HuxintingCs@outlook.com";

  const successCopy = () => {
    messageApi.open({
      type: "success",
      content: "已复制到剪贴板",
    });
  };
  const errorCopy = () => {
    messageApi.open({
      type: "error",
      content: "复制失败",
    });
  };

  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      successCopy();
    } catch {
      errorCopy();
    }
  };

  const wechatContent = (
    <div style={{ textAlign: "center" }}>
      <img src="/WeChatQR.png" alt="QR" style={{ width: 150 }} />
      <div style={{ color: "#999", fontSize: "12px", marginTop: "0px" }}>
        <p>微信号: {WECHAT_ID}</p>
        点击复制微信号
      </div>
    </div>
  );
  const emailContent = (
    <div style={{ textAlign: "center" }}>
      <div style={{ color: "#999", fontSize: "12px", marginTop: "0px" }}>
        <p>邮箱: {EMAIL_ADDRESS}</p>
        点击复制邮箱地址
      </div>
    </div>
  );

  const handleIconClick = (type: "wechat" | "email", e: React.MouseEvent) => {
    e.preventDefault(); // 阻止默认跳转行为
    // 根据 type 选择要复制的文本
    const textToCopy = type === "wechat" ? WECHAT_ID : EMAIL_ADDRESS;
    handleCopy(textToCopy);
  };

  return (
    <>
      {contextHolder}
      <footer className="footer">
        <div className="social">
          <div className="social-text">
            <p>👏随时欢迎交流技术😁</p>
          </div>
          <div className="social-btn-list">
            <div className="social-btn" aria-label="WeChat">
              <Popover content={wechatContent}>
                <a onClick={(e) => handleIconClick("wechat", e)}>
                  <WechatOutlined />
                </a>
              </Popover>
            </div>
            <div className="social-btn" aria-label="Email">
              <Popover content={emailContent}>
                <a onClick={(e) => handleIconClick("email", e)}>
                  <MailOutlined />
                </a>
              </Popover>
            </div>
            <div className="social-btn" aria-label="Github">
              <a href="https://github.com/Huxting" target="_blank">
                <GithubOutlined />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">© 2025 Amy. Designed with Gemini.</div>
      </footer>
    </>
  );
}

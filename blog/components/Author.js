import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{
    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100}  src="https://img2.woyaogexing.com/2019/08/26/d1cc0126a34141b792638666c257e038!600x600.jpeg"  /></div>
            <div className="author-introduction">
                pan
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account"  />
                <Avatar size={28} icon="qq"  className="account" />
                <Avatar size={28} icon="wechat"  className="account"  />
            </div>
        </div>
    )
}

export default Author

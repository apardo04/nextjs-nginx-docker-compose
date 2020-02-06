

const Index = ({host, ip}) => (
  <React.Fragment>
  <div className="bg-img">
    <p className="text">Server IP address: {ip}</p>
    <p className="text">Host: {host}</p>
    <p className="text">WebServer01</p>
  </div>    
    <style jsx>{`
        .bg-img {
          background: url(/img/docker.jpg) no-repeat center fixed;
          background-size: cover;
          height: 855px;
        }
        .text {
          font-size: 40px;
          margin: 0;
          width: 36%
        }
    `}</style>
  </React.Fragment>
);


Index.getInitialProps = async ctx => {
  try {
    var ip = require('os').networkInterfaces().eth0[0].address;
    console.log(ip)
    return { ip: ip, host: ctx.req.headers.host }
  }
  catch(error) {
    console.error(error)
    return { ip: "error", host: ctx.req.headers.host }
  }
  
}

export default Index;
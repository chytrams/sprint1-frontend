const Home = () => {

    return (
        <div
            style={{
                backgroundImage: `url("https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'cover',
            }}>
            <div className="container"
                style={{ height: "100vh" }}
            >
                <h1 className="display-4 text-primary  pt-5">Bus reservation system</h1>
                <p>The Bus Reservation System is designed to automate online ticket purchasing through an easy-to-use online bus booking system.</p>
            </div>

            {/* <div >
                <img width="100%" src="https://miro.medium.com/max/8420/1*Jq9zkjx65HKizHjXSas51g.png" alt="development"></img>
                <img width="100%" src="https://www.contentgrip.com/content/images/wordpress/2021/03/capgemini-FI-1.jpg" alt="Capgemini Office"></img>
            </div> */}

        </div>

    );
}

export default Home;
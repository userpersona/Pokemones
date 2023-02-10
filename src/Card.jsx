
function Card({imageUrl, name}) {

    return (
        <div style={{
            width: '350px',
            height: '350px',
            border: '2px solid black',
            borderRadius: '10px'
        }}


        >
            <div style={{
                width: '100%',
                height: '70%',
               
            }}
            >  <img src={imageUrl} alt= {name}
            style={{
                width:"100%",
                objectFit: "cover", 
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
               
            }}
            />
            </div>
            <div style={{
                width:"100%",
                height:"30%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
            }}
            >{name}</div>
        </div>
    )

}

export default Card;
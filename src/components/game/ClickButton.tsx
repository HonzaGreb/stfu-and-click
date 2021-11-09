const ClickButton = () => {
    const btnClickHandler = () => {
        // btn functionality
        console.log('clicked')
    }

    return <button onClick={btnClickHandler}>Click!</button>
}

export default ClickButton
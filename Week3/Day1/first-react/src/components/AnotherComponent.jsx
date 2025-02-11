

const AnotherComponent = (props) => {
    console.log(props)

    return (
        <fieldset>
            <legend>AnotherComponent.jsx</legend>
            <h3>Hello from the Another Component!</h3>

            {
                props.aa.map((elm, indx) => {
                    return <div key={indx}>
                        {elm}
                    </div>
                })
            }

        </fieldset>
    )
}


export default AnotherComponent

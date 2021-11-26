

function AuthInput(props){
    return(
        <input {...props} className = {"border-2 border-theme_dark-brighter rounded-md p-2 block " + props.className }/>
    );
}
export default AuthInput;
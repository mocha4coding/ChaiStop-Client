function AuthButton(props){
    let classNames = "border-2 border-theme_dark-highlight  text-theme_dark font-bold rounded-full px-4 py-1 mt-1 text-sm ";
    
    if(props.outline){
        classNames += "text-theme_dark-highlight px-5 ";
    } else {
        classNames += "bg-theme_dark-highlight "
    }
    return(
        <button  {...props}  className = {classNames + props.className}/>
    );
}
export default AuthButton;
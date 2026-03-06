import Button from "./button";
function Bar()
{
    return(
        <div className="flex flex-wrap justify-center gap-x-4">
            <div className="flex flex-wrap justify-center space-x-4 bg-white">
            <Button color="green"></Button>
            <Button color="red"></Button>
            <Button color="black"></Button>
            <Button color="blue"></Button>
            <Button color="yellow"></Button>
            </div>
        </div>
    )
}
export default Bar;
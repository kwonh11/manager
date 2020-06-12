import {Container} from "@material-ui/core";
import Loading from "../customHook/Loading";

export default function Board({isLoading}) {
    return (
    <Container fixed>
        <Loading isLoading={isLoading}/>
        <div>
            Board
        </div>
    </Container>
    )
}
import {ChangeEvent, KeyboardEvent} from "react";
import style from "./BlogPage.module.scss"
import {Button} from "../../components/Button/Button";
import {Post} from "./Post/Post";
import {BlogPagePropsType} from "./BlogPageContainer";
import {Component} from 'react';

export class BlogPage extends Component<BlogPagePropsType> {
    componentDidMount() {
        document.title = "Blog page"
        this.props.setHeaderTitle("blog page")
    }

    onChangeInputValueHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.preventDefault();
        this.props.setPostTextValue(event.currentTarget.value)
    };
    onKeyDownCreateNewPostHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.ctrlKey && event.key === "Enter") {
            this.props.createPost()
        }
    };
    createNewPostHandler = () => {
        this.props.createPost()
    };
    
    render() {

        return (
            <>
                <div className={style.form_inner}>
                    <div className={style.form_group}>
                      <textarea
                          className={style.input_text}
                          name="text"
                          value={this.props.postTextValue}
                          placeholder="Remember, to be very polite to each other ;)"
                          onChange={this.onChangeInputValueHandler}
                          onKeyDown={this.onKeyDownCreateNewPostHandler}
                      />
                    </div>

                    <div className={style.form_button}>
                        <div className={style.block_btn}>
                            <Button callback={this.createNewPostHandler}>create post</Button>
                        </div>
                    </div>
                </div>
                <div className={style.post_items}>
                    {this.props.postsData && this.props.postsData.map((data) =>
                        <Post key={data.id} post={data.post} time={data.time}/>)}
                </div>
            </>
        )
    }
}
import React from "react";
import E from "wangeditor";
import style from "./style.scss";

class Editor extends React.Component {
  state = {
    textContent: null
  };

  componentDidMount() {
    const editor = new E(this.editor);
    editor.customConfig.onchange = html => {
      this.setState({
        textContent: html
      });
    };
    editor.create();
  }

  render() {
    return (
      <div>
        <div ref={e => (this.editor = e)} className={style.editor}>
          <div>测试</div>
        </div>

        <div className={style.textarea}>
          显示输入文本：
          <span dangerouslySetInnerHTML={{ __html: this.state.textContent }} />
        </div>
      </div>
    );
  }
}

export default Editor;

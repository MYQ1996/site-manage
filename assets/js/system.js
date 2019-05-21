$(document).ready(function () {
    let html = ''
    let columnIds = ''
    
    for (let index = 0; index < system.length; index++) {

        const element = system[index];

        let column = `<h4 class="text-gray"><i class="linecons-tag" style="margin-right: 7px;" id="${element.column}"></i>${element.column}</h4>`
        
        let columnId = `<li>
            <a href="#${element.column}" class="smooth">
                <i class="${element.icon}"></i>
                <span class="title">${element.column}</span>
            </a>
        </li>`

        let list = ''

        for (let index = 0; index < element.list.length; index++) {
              const webInfo = element.list[index];

              let info = ''
              let end = 0

              if ((index / 4) === (end + 1)) {
                  info += `</div>`
              }

              if ((index % 4) === 0) {
                info += `<div class="row">`
                end = index/4;
              }

              info += `<div class="col-sm-3">
                <div class="xe-widget xe-conversations box2 label-info" onclick="window.open('${webInfo.url}', '_blank')" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="${webInfo.url}">
                    <div class="xe-comment-entry">
                        <a class="xe-user-img">
                            <img src="${webInfo.image}" class="img-circle" width="40">
                        </a>
                        <div class="xe-comment">
                            <a href="#" class="xe-user-name overflowClip_1">
                                <strong>${webInfo.title}</strong>
                            </a>
                            <p class="overflowClip_2">${webInfo.content}</p>
                        </div>
                    </div>
                </div>
            </div>`
            
            list += info
        }

        list = list + `</div></br>`
        html += column + list
        columnIds += columnId;
    }

    $('#content').html(html)
    $('#main-menu').html(columnIds)
})
// const text = document.getElementsByTagName('textarea');
const doc = document;

function tooltip() {
  let tooltipContainer = doc.createElement('div');
  $(tooltipContainer).attr(
    'class',
    'tooltip-container flex flex__align-center flex__center'
  );

  let tooltipOption = doc.createElement('div');
  $(tooltipOption).attr('class', 'tooltip-option grid grid-template-3-3');

  // Item 1
  let tooltipItem1 = doc.createElement('div');
  $(tooltipItem1).attr('class', 'tooltip-item');
  $(tooltipItem1).attr('id', 'paragraph');

  let tooltipImg1 = doc.createElement('img');
  $(tooltipImg1).attr('class', 'tooltip-img');
  $(tooltipImg1).attr('src', 'img/paragraph.svg');

  let tooltipItemBox1 = doc.createElement('div');
  $(tooltipItemBox1).attr('class', 'tooltip-item-box');

  let tooltipDescribe1 = doc.createElement('div');
  $(tooltipDescribe1).attr('class', 'tooltip-describe');
  $(tooltipDescribe1).append('Paragraph');

  $(tooltipItemBox1).append(tooltipImg1);
  $(tooltipItemBox1).append(tooltipDescribe1);
  $(tooltipItem1).append(tooltipItemBox1);

  // Item 2
  let tooltipItem2 = doc.createElement('div');
  $(tooltipItem2).attr('class', 'tooltip-item');
  $(tooltipItem2).attr('id', 'unordered');

  let tooltipImg2 = doc.createElement('img');
  $(tooltipImg2).attr('class', 'tooltip-img');
  $(tooltipImg2).attr('src', 'img/list.svg');

  let tooltipItemBox2 = doc.createElement('div');
  $(tooltipItemBox2).attr('class', 'tooltip-item-box');

  let tooltipDescribe2 = doc.createElement('div');
  $(tooltipDescribe2).attr('class', 'tooltip-describe');
  $(tooltipDescribe2).append('Unordered list');

  $(tooltipItemBox2).append(tooltipImg2);
  $(tooltipItemBox2).append(tooltipDescribe2);
  $(tooltipItem2).append(tooltipItemBox2);

  // Item 3
  let tooltipItem3 = doc.createElement('div');
  $(tooltipItem3).attr('class', 'tooltip-item');
  $(tooltipItem3).attr('id', 'ordered');

  let tooltipImg3 = doc.createElement('img');
  $(tooltipImg3).attr('class', 'tooltip-img');
  $(tooltipImg3).attr('src', 'img/number-list.svg');

  let tooltipItemBox3 = doc.createElement('div');
  $(tooltipItemBox3).attr('class', 'tooltip-item-box');

  let tooltipDescribe3 = doc.createElement('div');
  $(tooltipDescribe3).attr('class', 'tooltip-describe');
  $(tooltipDescribe3).append('Ordered list');

  $(tooltipItemBox3).append(tooltipImg3);
  $(tooltipItemBox3).append(tooltipDescribe3);
  $(tooltipItem3).append(tooltipItemBox3);

  // Item 4
  let tooltipItem4 = doc.createElement('div');
  $(tooltipItem4).attr('class', 'tooltip-item');
  $(tooltipItem4).attr('id', 'image');

  let tooltipImg4 = doc.createElement('img');
  $(tooltipImg4).attr('class', 'tooltip-img');
  $(tooltipImg4).attr('src', 'img/image.svg');

  let tooltipItemBox4 = doc.createElement('div');
  $(tooltipItemBox4).attr('class', 'tooltip-item-box');

  let tooltipDescribe4 = doc.createElement('div');
  $(tooltipDescribe4).attr('class', 'tooltip-describe');
  $(tooltipDescribe4).append('Image');

  $(tooltipItemBox4).append(tooltipImg4);
  $(tooltipItemBox4).append(tooltipDescribe4);
  $(tooltipItem4).append(tooltipItemBox4);

  // Item 5
  let tooltipItem5 = doc.createElement('div');
  $(tooltipItem5).attr('class', 'tooltip-item');
  $(tooltipItem5).attr('id', 'heading');

  let tooltipImg5 = doc.createElement('img');
  $(tooltipImg5).attr('class', 'tooltip-img');
  $(tooltipImg5).attr('src', 'img/header.svg');

  let tooltipItemBox5 = doc.createElement('div');
  $(tooltipItemBox5).attr('class', 'tooltip-item-box');

  let tooltipDescribe5 = doc.createElement('div');
  $(tooltipDescribe5).attr('class', 'tooltip-describe');
  $(tooltipDescribe5).append('Heading');

  $(tooltipItemBox5).append(tooltipImg5);
  $(tooltipItemBox5).append(tooltipDescribe5);
  $(tooltipItem5).append(tooltipItemBox5);

  // Item 6
  let tooltipItem6 = doc.createElement('div');
  $(tooltipItem6).attr('class', 'tooltip-item');
  $(tooltipItem6).attr('id', 'task');

  let tooltipImg6 = doc.createElement('img');
  $(tooltipImg6).attr('class', 'tooltip-img');
  $(tooltipImg6).attr('src', 'img/task list.svg');

  let tooltipItemBox6 = doc.createElement('div');
  $(tooltipItemBox6).attr('class', 'tooltip-item-box');

  let tooltipDescribe6 = doc.createElement('div');
  $(tooltipDescribe6).attr('class', 'tooltip-describe');
  $(tooltipDescribe6).append('Task list');

  $(tooltipItemBox6).append(tooltipImg6);
  $(tooltipItemBox6).append(tooltipDescribe6);
  $(tooltipItem6).append(tooltipItemBox6);

  // Item 7
  let tooltipItem7 = doc.createElement('div');
  $(tooltipItem7).attr('class', 'tooltip-item');
  $(tooltipItem7).attr('id', 'code');

  let tooltipImg7 = doc.createElement('img');
  $(tooltipImg7).attr('class', 'tooltip-img');
  $(tooltipImg7).attr('src', 'img/code.svg');

  let tooltipItemBox7 = doc.createElement('div');
  $(tooltipItemBox7).attr('class', 'tooltip-item-box');

  let tooltipDescribe7 = doc.createElement('div');
  $(tooltipDescribe7).attr('class', 'tooltip-describe');
  $(tooltipDescribe7).append('Code Block');

  $(tooltipItemBox7).append(tooltipImg7);
  $(tooltipItemBox7).append(tooltipDescribe7);
  $(tooltipItem7).append(tooltipItemBox7);

  // Item 8
  let tooltipItem8 = doc.createElement('div');
  $(tooltipItem8).attr('class', 'tooltip-item');
  $(tooltipItem8).attr('id', 'quote');

  let tooltipImg8 = doc.createElement('img');
  $(tooltipImg8).attr('class', 'tooltip-img');
  $(tooltipImg8).attr('src', 'img/right-quotation-mark.svg');

  let tooltipItemBox8 = doc.createElement('div');
  $(tooltipItemBox8).attr('class', 'tooltip-item-box');

  let tooltipDescribe8 = doc.createElement('div');
  $(tooltipDescribe8).attr('class', 'tooltip-describe');
  $(tooltipDescribe8).append('Blockquote');

  $(tooltipItemBox8).append(tooltipImg8);
  $(tooltipItemBox8).append(tooltipDescribe8);
  $(tooltipItem8).append(tooltipItemBox8);

  // Item 9
  let tooltipItem9 = doc.createElement('div');
  $(tooltipItem9).attr('class', 'tooltip-item');
  $(tooltipItem9).attr('id', 'table');

  let tooltipImg9 = doc.createElement('img');
  $(tooltipImg9).attr('class', 'tooltip-img');
  $(tooltipImg9).attr('src', 'img/table.svg');

  let tooltipItemBox9 = doc.createElement('div');
  $(tooltipItemBox9).attr('class', 'tooltip-item-box');

  let tooltipDescribe9 = doc.createElement('div');
  $(tooltipDescribe9).attr('class', 'tooltip-describe');
  $(tooltipDescribe9).append('Table');

  $(tooltipItemBox9).append(tooltipImg9);
  $(tooltipItemBox9).append(tooltipDescribe9);
  $(tooltipItem9).append(tooltipItemBox9);

  // Item 10
  let tooltipItem10 = doc.createElement('div');
  $(tooltipItem10).attr('class', 'tooltip-item');
  $(tooltipItem10).attr('id', 'separator');

  let tooltipImg10 = doc.createElement('img');
  $(tooltipImg10).attr('class', 'tooltip-img');
  $(tooltipImg10).attr('src', 'img/line.svg');

  let tooltipItemBox10 = doc.createElement('div');
  $(tooltipItemBox10).attr('class', 'tooltip-item-box');

  let tooltipDescribe10 = doc.createElement('div');
  $(tooltipDescribe10).attr('class', 'tooltip-describe');
  $(tooltipDescribe10).append('Separator');

  $(tooltipItemBox10).append(tooltipImg10);
  $(tooltipItemBox10).append(tooltipDescribe10);
  $(tooltipItem10).append(tooltipItemBox10);

  $(tooltipOption).append(tooltipItem1);
  $(tooltipOption).append(tooltipItem2);
  $(tooltipOption).append(tooltipItem3);
  $(tooltipOption).append(tooltipItem4);
  $(tooltipOption).append(tooltipItem5);
  $(tooltipOption).append(tooltipItem6);
  $(tooltipOption).append(tooltipItem7);
  $(tooltipOption).append(tooltipItem8);
  $(tooltipOption).append(tooltipItem9);
  $(tooltipOption).append(tooltipItem10);

  $(tooltipContainer).append(tooltipOption);
  return tooltipContainer;
}

function between() {
  let betweenDiv = doc.createElement('div');
  $(betweenDiv).attr(
    'class',
    'row flex flex__center between flex__align-center'
  );

  let betweenLeft = doc.createElement('div');
  $(betweenLeft).attr('class', 'page-left');

  let betweenRight = doc.createElement('div');
  $(betweenRight).attr('class', 'page-right flex flex__center');

  let betweenButton = doc.createElement('button');
  $(betweenButton).attr(
    'class',
    'button flex flex__center cursor-pointer add flex__align-center'
  );

  let betweenTooltip = doc.createElement('div');
  $(betweenTooltip).attr('class', 'btn btn-primary tooltip');
  $(betweenTooltip).attr('clickth', '0');
  $(betweenTooltip).attr('show', '0');

  let betweenAdd = doc.createElement('img');
  $(betweenAdd).attr('src', 'img/plus.svg');

  let betweenBottom = doc.createElement('div');
  $(betweenBottom).attr('class', 'bottom');

  let betweenI = doc.createElement('i');

  $(betweenBottom).append(betweenI);

  $(betweenTooltip).append(betweenAdd);
  $(betweenTooltip).append(betweenBottom);

  $(betweenButton).append(betweenTooltip);

  $(betweenRight).append(betweenButton);

  $(betweenDiv).append(betweenLeft);
  $(betweenDiv).append(betweenRight);

  return betweenDiv;
}

function createParagraph() {
  let para = doc.createElement('div');
  $(para).attr(
    'class',
    'row flex flex__flex-start paragraph flex__align-center'
  );

  let paraLeft = doc.createElement('div');
  $(paraLeft).attr('class', 'page-left');

  let paraRight = doc.createElement('div');
  $(paraRight).attr('class', 'page-right');

  let paraButton = doc.createElement('button');
  $(paraButton).attr('class', 'button cursor-pointer add');

  let paraTooltip = doc.createElement('div');
  $(paraTooltip).attr('class', 'btn btn-primary tooltip');
  $(paraTooltip).attr('clickth', '0');
  $(paraTooltip).attr('show', '0');

  let paraAdd = doc.createElement('img');
  $(paraAdd).attr('src', 'img/plus.svg');

  let paraBottom = doc.createElement('div');
  $(paraBottom).attr('class', 'bottom');

  let paraI = doc.createElement('i');

  $(paraBottom).append(paraI);

  $(paraTooltip).append(paraAdd);
  $(paraTooltip).append(paraBottom);

  $(paraButton).append(paraTooltip);

  $(paraLeft).append(paraButton);

  let paraText = doc.createElement('textarea');
  $(paraText).attr('class', 'page-content');
  $(paraText).attr('rows', '1');
  $(paraText).attr('placeholder', 'Start writing or type / to choose a block');

  $(paraRight).append(paraText);

  $(para).append(paraLeft);
  $(para).append(paraRight);

  return para;
}

function switchOption(str) {
  switch (str) {
    case 'paragraph':
      let page = between();
      let para = createParagraph();
      $('.page').append(page);
      $('.page').append(para);
      break;

    default:
      break;
  }
}

function hideBottom() {
  $('[src="img/plus.svg"]')
    .parent()
    .find('.bottom')
    .css('visibility', 'hidden')
    .css('opacity', '0');
}

function createTooltip(element) {
  let clickTh = $(element).attr('clickth');
  let show = $(element).attr('show');

  if (show == 0) {
    hideBottom();
    $(element)
      .find('.bottom')
      .css('visibility', 'visible')
      .css('opacity', '1');

    if (clickTh == 0) {
      let container = tooltip();

      $(element)
        .find('.bottom')
        .append(container);

      clickTh++;
      $(element).attr('clickth', clickTh + '');
    }
    show = 1;
    $(element).attr('show', show + '');
  } else {
    hideBottom();
    show = 0;
    $(element).attr('show', show + '');
  }
}

$(document).ready(function() {
  $('textarea').autoResize();

  $('body').click(function(e) {
    if (Object.values($('textarea')).indexOf(e.target) <= -1) {
      $('textarea').removeClass('box-shadow');
    }

    if (
      !$(e.target)
        .parent()
        .parent()
        .hasClass('paragraph')
    ) {
      $('.paragraph').each(function(i) {
        if (
          $(this)
            .find('textarea')
            .val() === ''
        ) {
          $(this)
            .find('textarea')
            .attr('placeholder', 'Start writing or type / to choose a block');
          $(this)
            .find('.page-left')
            .css('visibility', 'visible')
            .css('opacity', '1');
        }
      });

      // $(e.target)
      //   .parent()
      //   .parent()
      //   .find('.page-left')
      //   .css('visibility', 'visible')
      //   .css('opacity', '1');
    }

    if ($(e.target)[0].type == 'textarea') {
      $('textarea').removeClass('box-shadow');
      $(e.target).addClass('box-shadow');
      if (
        $(e.target)
          .parent()
          .parent()
          .hasClass('paragraph')
      ) {
        $(e.target).attr('placeholder', '');
        $(e.target)
          .parent()
          .parent()
          .find('.page-left')
          .css('visibility', 'hidden')
          .css('opacity', '0');
      }
    }

    if (
      Object.values($('[src="img/plus.svg"]')).indexOf(e.target) <= -1 &&
      Object.values($('.tooltip-option')).indexOf(e.target) <= -1
    ) {
      if (
        !$(e.target).hasClass('tooltip-item') &&
        !$(e.target).hasClass('tooltip-img') &&
        !$(e.target).hasClass('tooltip-describe') &&
        !$(e.target).hasClass('tooltip-item-box') &&
        !$(e.target).hasClass('tooltip-container')
      ) {
        hideBottom();
      } else if ($(e.target).hasClass('tooltip-item')) {
        switchOption($(e.target).attr('id'));

        hideBottom();
      } else if ($(e.target).hasClass('tooltip-item-box')) {
        switchOption(
          $(e.target)
            .parent()
            .attr('id')
        );

        hideBottom();
      } else if (
        $(e.target).hasClass('tooltip-describe') ||
        $(e.target).hasClass('tooltip-img')
      ) {
        switchOption(
          $(e.target)
            .parent()
            .parent()
            .attr('id')
        );

        hideBottom();
      }
    } else {
    }

    if (
      $(e.target)
        .parent()
        .hasClass('tooltip')
    ) {
      createTooltip($(e.target).parent());
    }
  });
});

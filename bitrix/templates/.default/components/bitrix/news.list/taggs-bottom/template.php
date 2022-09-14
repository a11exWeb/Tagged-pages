<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */

use \Bitrix\Main\Page\Asset;

$this->setFrameMode(true);

function get_section_path($input)
{
	$parsed_url = explode('/', $input);
	$section_path = array_slice($parsed_url, 0, 3);
	$output = implode('/', $section_path) . '/';
	return $output;
}

$current_page = $APPLICATION->GetCurPage(); ?>

<? $tagged_pages_list = []; ?>

<? foreach ($arResult["ITEMS"] as $arItem) : ?>

	<?
		$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
		$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<? $URL = $arItem["DISPLAY_PROPERTIES"]['ATT_URL']['VALUE']; ?>
	<? $tagged_pages_list[] = $URL; ?>

	<? if ($URL == $current_page) {

		$H1 = $arItem["DISPLAY_PROPERTIES"]['ATT_H1']['DISPLAY_VALUE'];
		$META_TITLE = $arItem["DISPLAY_PROPERTIES"]['ATT_META_TITLE']['DISPLAY_VALUE'];
		$META_DESC = $arItem["DISPLAY_PROPERTIES"]['ATT_META_DESC']['DISPLAY_VALUE'];
		$SEO_TEXT = $arItem["DISPLAY_PROPERTIES"]['ATT_TEXT']['DISPLAY_VALUE'];

		$APPLICATION->SetTitle($H1);
		$APPLICATION->SetPageProperty('title', $META_TITLE);
		$APPLICATION->SetPageProperty("description", $META_DESC); ?>

		<title><? $APPLICATION->ShowTitle() ?></title>
	
		<div class="seo">
			<div class="seo__title">Описание</div>
			<div class="seo__text"><?= $SEO_TEXT ?></div>
		</div>

	<? } ?>

<? endforeach; ?>

<? if (in_array($current_page, $tagged_pages_list)) {
	$full_path = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $APPLICATION->GetCurPage();
	Asset::getInstance()->addString('<link rel="canonical" href=' . $full_path . '" />');
} else {
	$rel_path = get_section_path($APPLICATION->GetCurPage());
	Asset::getInstance()->addString('<link rel="canonical" href="' . $rel_path . '" />');
} ?>

</div>
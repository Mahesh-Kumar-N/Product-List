import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {ProductListService} from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  host: {'class': 'product-list'}
})
export class ProductListComponent implements OnInit {
  /**
   * Holds the list of Products.
   * Initialized with mock response, because of the CORS error.
   */
  productArray = [
    {
      "id": "INL-60035-00984",
      "sku": "INL-60035-00984",
      "merchantCode": "INL-60035",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A13 Smartphone [4/128 GB]",
      "price": {
        "priceDisplay": "Rp2.389.000",
        "strikeThroughPriceDisplay": "Rp2.499.000",
        "discount": 4,
        "minPrice": 2389000.0,
        "offerPriceDisplay": "Rp2.389.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full25_evf2ecjv.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full02_uqo2qj2a.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full26_j6fms6rq.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full27_lstrzc3i.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full28_lgghkvfr.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full29_ehtfjn9n.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full30_kewjjyha.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full31_fju7ozf5.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42165365/samsung_samsung_galaxy_a13_smartphone_-4-128_gb-_full32_qswrgdw9.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 4,
        "count": 58,
        "absoluteRating": 4.9
      },
      "itemCount": 1,
      "defaultSku": "INL-60035-00984-00001",
      "itemSku": "INL-60035-00984-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR",
        "BLIBLI_SHIPPING",
        "TUKAR_TAMBAH"
      ],
      "formattedId": "ps--INL-60035-00984",
      "url": "/p/samsung-galaxy-a13-smartphone-4-128-gb/ps--INL-60035-00984?ds=INL-60035-00984-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=KMXgL4AD0nXgovQCgercW9PYO5zFdnvVYgD3gkuLvhnffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3046516&pid=INL-60035-00984",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Tangerang",
      "numLocations": 1,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "PRI-1336259-03",
      "uniqueSellingPoint": "• Processor Exynos 850<br>• Size 6.6”<br>• Rear Camera Resolution 50.0 MP + 5.0 MP + 2.0 MP + 2.0 MP ; Front Camera Resolution 8.0 MP<br>• Battery Capacity 5000mAh",
      "isCheap": true,
      "merchantName": "indijaya cell shop official store",
      "soldRangeCount": {
        "en": "774",
        "id": "774"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "WAS-70190-00112",
      "sku": "WAS-70190-00112",
      "merchantCode": "WAS-70190",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A22 5G 6/128 GB Garansi Resmi Indonesia",
      "price": {
        "priceDisplay": "Rp3.100.000",
        "discount": 0,
        "minPrice": 3100000.0,
        "offerPriceDisplay": "Rp3.100.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//106/MTA-44444698/samsung_samsung_galaxy_a22_5g_6-128_gb_garansi_resmi_indonesia_full01_be575ebe.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//106/MTA-44444698/samsung_samsung_galaxy_a22_5g_6-128_gb_garansi_resmi_indonesia_full02_5116c766.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//106/MTA-44444698/samsung_samsung_galaxy_a22_5g_6-128_gb_garansi_resmi_indonesia_full03_f232c68a.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 1,
      "defaultSku": "WAS-70190-00112-00001",
      "itemSku": "WAS-70190-00112-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--WAS-70190-00112",
      "url": "/p/samsung-galaxy-a22-5g-6-128-gb-garansi-resmi-indonesia/ps--WAS-70190-00112?ds=WAS-70190-00112-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=jgM2ArtSoJ8G9RlsDXAdTK8RZl5yD1dY35xhvh5OndLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3264475&pid=WAS-70190-00112",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kab. Purwakarta",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Gold",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      },
      "level0Id": "MTA-44444698",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "waloh store",
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "SAO-60034-01233",
      "sku": "SAO-60034-01233",
      "merchantCode": "SAO-60034",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy Tab A7 Lite [3/32GB]",
      "price": {
        "priceDisplay": "Rp2.229.000",
        "strikeThroughPriceDisplay": "Rp2.899.000",
        "discount": 23,
        "minPrice": 2229000.0,
        "offerPriceDisplay": "Rp2.229.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-18933960/samsung_samsung_galaxy_tab_a7_lite_-3-32gb-_full01_g8tpjev4.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-18933960/samsung_samsung_galaxy_tab_a7_lite_-3-32gb-_full01_gbde1h66.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-18933960/samsung_samsung_galaxy_tab_a7_lite_-3-32gb-_full02_e58r7heu.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-18933960/samsung_samsung_galaxy_tab_a7_lite_-3-32gb-_full03_nlsxvx5m.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-18933960/samsung_samsung_galaxy_tab_a7_lite_-3-32gb-_full04_hv5v4w6l.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//103/MTA-18933960/samsung_samsung_galaxy_tab_a7_lite_-3-32gb-_full05_ryfj4hzp.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 4,
        "count": 734,
        "absoluteRating": 4.9
      },
      "itemCount": 1,
      "defaultSku": "SAO-60034-01233-00002",
      "itemSku": "SAO-60034-01233-00002",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR",
        "BLIBLI_SHIPPING",
        "TUKAR_TAMBAH"
      ],
      "formattedId": "ps--SAO-60034-01233",
      "url": "/p/samsung-galaxy-tab-a7-lite-3-32gb/ps--SAO-60034-01233?ds=SAO-60034-01233-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=BGFzUV9JheIuIn59zCBUcIXX2ZGPECpyNM7VTqdNk0nffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3036193&pid=SAO-60034-01233",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "TA-1000004",
        "TA-1000003",
        "SA-1000110",
        "TU-1000021"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Tangerang",
      "numLocations": 2,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "MTA-18933960",
      "uniqueSellingPoint": "• Cicilan 0% dengan Blibli Paylater dengan Kode Voucher : CICILAN-SAMSUNG (Periode 7 Februari - 31 Mei 2022)\n<br>• Perioder promo : 1 - 28 Februari 2022\n<br>• Display 8.7” 1340x800 (WXGA+) TFT\n<br>• Processor: MediaTek MT8768T (Quad 2.3GHz + Quad 1.8GHz)\n<br>• Camera: Rear 8 MP AF rear camera | Front 2MP front camera\n<br>• Battery: 5,100mAh",
      "isCheap": true,
      "merchantName": "samsung official store",
      "soldRangeCount": {
        "en": "4,6 k",
        "id": "4,6 rb"
      },
      "categoryIdHierarchy": [
        "54593",
        "TA-1000003",
        "TA-1000004"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "BLA-60054-01023",
      "sku": "BLA-60054-01023",
      "merchantCode": "BLA-60054",
      "status": "AVAILABLE",
      "name": "Samsung UA32T4500AKXXD Smart TV [32 Inch]",
      "price": {
        "priceDisplay": "Rp2.899.000",
        "strikeThroughPriceDisplay": "Rp3.299.000",
        "discount": 12,
        "minPrice": 2899000.0,
        "offerPriceDisplay": "Rp2.899.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6793355/samsung_samsung_ua32t4500akxxd_smart_tv_-32_inch-_full06_o6lk3oc3.jpeg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6793355/samsung_samsung_ua32t4500akxxd_smart_tv_-32_inch-_full02_cryc69vn.jpeg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6793355/samsung_samsung_ua32t4500akxxd_smart_tv_-32_inch-_full03_strbcudx.jpeg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6793355/samsung_samsung_ua32t4500akxxd_smart_tv_-32_inch-_full04_jo46m1r7.jpeg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6793355/samsung_samsung_ua32t4500akxxd_smart_tv_-32_inch-_full05_lo9z1gou.jpeg"
      ],
      "rootCategory": {
        "id": "54650",
        "name": "Peralatan Elektronik"
      },
      "brand": "Samsung",
      "review": {
        "rating": 4,
        "count": 674,
        "absoluteRating": 4.8
      },
      "itemCount": 1,
      "defaultSku": "BLA-60054-01023-00001",
      "itemSku": "BLA-60054-01023-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR",
        "BLIBLI_SHIPPING",
        "COMBO",
        "TUKAR_TAMBAH"
      ],
      "formattedId": "ps--BLA-60054-01023",
      "url": "/p/samsung-ua32t4500akxxd-smart-tv-32-inch/ps--BLA-60054-01023?ds=BLA-60054-01023-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=jSNR1GU5990jQ1tLubIOInYgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3094856&pid=BLA-60054-01023",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54650",
        "TE-1000002",
        "TE-1000004",
        "SM-1000049",
        "SM-1000046"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Bekasi",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "PRI-771164-03",
      "uniqueSellingPoint": "• Layar : 32 Inch <br>• Resolusi : 1,366 x 768<br>• Picture Engine : Hyper Real",
      "isCheap": true,
      "merchantName": "blibli official store (appliances)",
      "soldRangeCount": {
        "en": "2,9 k",
        "id": "2,9 rb"
      },
      "categoryIdHierarchy": [
        "54650",
        "TE-1000002",
        "TE-1000004",
        "SM-1000046",
        "SM-1000049"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "SIM-70055-00134",
      "sku": "SIM-70055-00134",
      "merchantCode": "SIM-70055",
      "status": "AVAILABLE",
      "name": "SAMSUNG Galaxy Watch4 Smartwatch 40mm [Garansi Resmi]",
      "price": {
        "priceDisplay": "Rp2.999.000",
        "discount": 0,
        "minPrice": 2999000.0,
        "offerPriceDisplay": "Rp2.999.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//108/MTA-35688726/samsung_samsung_galaxy_watch_4_smartwatch_40mm_-garansi_resmi-_full01_lr8u8792.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 1,
      "defaultSku": "SIM-70055-00134-00001",
      "itemSku": "SIM-70055-00134-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--SIM-70055-00134",
      "url": "/p/samsung-galaxy-watch4-smartwatch-40mm-garansi-resmi/ps--SIM-70055-00134?ds=SIM-70055-00134-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=fMd9e+tXNofMdUCyVhezk3YgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3223275&pid=SIM-70055-00134",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651510800000,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "SM-1000001",
        "WE-1000001",
        "54593"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Semarang",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Gold",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      },
      "level0Id": "MTA-35688726",
      "uniqueSellingPoint": "• Ukuran layar 1.2 inch Super AMOLED\n<br>• RAM 1.5 GB, ROM 16 GB\n<br>• Wear OS Powered by Samsung\n<br>• Exynos W920 Dual Core 1.18GHz (5nm Processor)\n<br>• Material Aluminum case\n<br>• Baterai 247 mAh\n<br>• *Garansi Resmi Samsung Electronics Indonesia 1 tahun.",
      "isCheap": true,
      "merchantName": "sinar mas selluler official store",
      "categoryIdHierarchy": [
        "54593",
        "WE-1000001",
        "SM-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "REG-60023-00703",
      "sku": "REG-60023-00703",
      "merchantCode": "REG-60023",
      "status": "AVAILABLE",
      "name": "SAMSUNG Galaxy A72 [8/128GB] - Garansi Resmi SEIN 1 Tahun",
      "price": {
        "priceDisplay": "Rp4.935.000 - Rp5.999.000",
        "discount": 0,
        "minPrice": 4935000.0
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12643508/samsung_samsung_galaxy_a72_-8-128gb-_-_garansi_resmi_sein_1_tahun_full04_j1d8lpva.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 2,
        "absoluteRating": 5.0
      },
      "itemCount": 6,
      "defaultSku": "REG-60023-00703-00004",
      "itemSku": "REG-60023-00703-00004",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "CNC_AVAILABLE",
        "REGULAR"
      ],
      "formattedId": "ps--REG-60023-00703",
      "url": "/p/samsung-galaxy-a72-8-128gb-garansi-resmi-sein-1-tahun/ps--REG-60023-00703?ds=REG-60023-00703-00004&source=SEARCH&sid=53aa86b1db87a3e6&metaData=z2pO7F+yNba3vQIim8Q2lWwNmXjDyauv/s/ScHTIHZ7ffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3043792&pid=REG-60023-00703",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 4
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651597200000,
        "delayShipping": true
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp4.935.000",
            "strikeThroughPriceDisplay": "Rp5.999.000",
            "discount": 17,
            "minPrice": 4935000.0,
            "offerPriceDisplay": "Rp4.935.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12643508/samsung_samsung_galaxy_a72_-8-128gb-_-_garansi_resmi_sein_1_tahun_full04_j1d8lpva.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "REG-60023-00703-00004",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE"
          ],
          "url": "/p/samsung-galaxy-a72-8-128gb-garansi-resmi-sein-1-tahun/ps--REG-60023-00703?ds=REG-60023-00703-00004&source=SEARCH&sid=53aa86b1db87a3e6&metaData=z2pO7F+yNba3vQIim8Q2lf/HMdNmgJ+jEkBX00utKVnuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3043792&pid=REG-60023-00703",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp4.999.000",
            "strikeThroughPriceDisplay": "Rp5.999.000",
            "discount": 16,
            "minPrice": 4999000.0,
            "offerPriceDisplay": "Rp4.999.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12643508/samsung_samsung_galaxy_a72_-8-128gb-_-_garansi_resmi_sein_1_tahun_full03_gks8dc8d.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "REG-60023-00703-00003",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE"
          ],
          "url": "/p/samsung-galaxy-a72-8-128gb-garansi-resmi-sein-1-tahun/ps--REG-60023-00703?ds=REG-60023-00703-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=z2pO7F+yNba3vQIim8Q2lVEe/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3043792&pid=REG-60023-00703",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp5.819.700",
            "strikeThroughPriceDisplay": "Rp5.999.000",
            "discount": 2,
            "minPrice": 5819700.0,
            "offerPriceDisplay": "Rp5.819.700"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12643508/samsung_samsung_galaxy_a72_-8-128gb-_-_garansi_resmi_sein_1_tahun_full02_2yna0zu.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "REG-60023-00703-00002-PP-3043792",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE",
            "CNC_PRODUCT"
          ],
          "url": "/p/samsung-galaxy-a72-8-128gb-garansi-resmi-sein-1-tahun/ps--REG-60023-00703?ds=REG-60023-00703-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=pOilVZ2fvVhCNmBQQBsD33UrNPOx517XyuUEEKttZNjuowq0univimq0SD65T+N0&cnc=true&pickupPointCode=PP-3043792&pid=REG-60023-00703",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "None",
            "merchantBadgeUrl": "None"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp5.998.000",
            "strikeThroughPriceDisplay": "Rp5.999.000",
            "discount": 0,
            "minPrice": 5998000.0,
            "offerPriceDisplay": "Rp5.998.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12643508/samsung_samsung_galaxy_a72_-8-128gb-_-_garansi_resmi_sein_1_tahun_full01_ekleolwz.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "REG-60023-00703-00001-PP-3043792",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE",
            "CNC_PRODUCT"
          ],
          "url": "/p/samsung-galaxy-a72-8-128gb-garansi-resmi-sein-1-tahun/ps--REG-60023-00703?ds=REG-60023-00703-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=9v5xk1J4UgPF55afVsK31Q0B8Xeggs5m7PyQVs9+kTLuowq0univimq0SD65T+N0&cnc=true&pickupPointCode=PP-3043792&pid=REG-60023-00703",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "None",
            "merchantBadgeUrl": "None"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kota Surabaya",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "MTA-12643508",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "rejodadi gadget official  store",
      "soldRangeCount": {
        "en": "45",
        "id": "45"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "SEP-60034-00548",
      "sku": "SEP-60034-00548",
      "merchantCode": "SEP-60034",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A52 8GB/128GB Garansi Resmi",
      "price": {
        "priceDisplay": "Rp4.699.000",
        "strikeThroughPriceDisplay": "Rp4.999.000",
        "discount": 6,
        "minPrice": 4699000.0,
        "offerPriceDisplay": "Rp4.699.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//88/MTA-20843151/samsung_samsung_galaxy_a52_8gb-128gb__garansi_resmi_full01_wt0cm8z.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//88/MTA-20843151/samsung_samsung_galaxy_a52_8gb-128gb__garansi_resmi_full04_jk55h5qv.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 6,
        "absoluteRating": 5.0
      },
      "itemCount": 2,
      "defaultSku": "SEP-60034-00548-00004-PP-3037586",
      "itemSku": "SEP-60034-00548-00004",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "CNC_AVAILABLE",
        "CNC_PRODUCT",
        "REGULAR"
      ],
      "formattedId": "ps--SEP-60034-00548",
      "url": "/p/samsung-galaxy-a52-8gb-128gb-garansi-resmi/ps--SEP-60034-00548?ds=SEP-60034-00548-00004&source=SEARCH&sid=53aa86b1db87a3e6&metaData=18gTYxCSvrKZKwMxzzgn+XYgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=true&pickupPointCode=PP-3037586&pid=SEP-60034-00548",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Surabaya",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "MTA-20843151",
      "uniqueSellingPoint": "• OS Android \n<br>• Chipset Snapdragon 720G\n<br>• Size 6.5 inches\n<br>• Berat 189 g\n<br>• Kamera Belakang 64 (OIS) + 12 + 5 + 5 MP\n<br>• Kamera Depan 32 MP\n<br>• Battery 4500 mAh",
      "isCheap": true,
      "merchantName": "sentra pusat gadget official store",
      "soldRangeCount": {
        "en": "32",
        "id": "32"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "ATC-60029-00359",
      "sku": "ATC-60029-00359",
      "merchantCode": "ATC-60029",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A51 Smartphone [8GB/ 128GB]",
      "price": {
        "priceDisplay": "Rp3.983.000",
        "strikeThroughPriceDisplay": "Rp4.699.000",
        "discount": 15,
        "minPrice": 3983000.0,
        "offerPriceDisplay": "Rp3.983.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//100/MTA-6652396/samsung_samsung_galaxy_a51_-8gb-128gb-_-_garansi_resmi_full21_dc1mrx7x.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6652396/samsung_samsung-galaxy-a51-smartphone--8gb--128gb-_full16.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6652396/samsung_samsung-galaxy-a51-smartphone--8gb--128gb-_full17.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6652396/samsung_samsung-galaxy-a51-smartphone--8gb--128gb-_full18.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium/MTA-6652396/samsung_samsung-galaxy-a51-smartphone--8gb--128gb-_full19.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 1,
      "defaultSku": "ATC-60029-00359-00001",
      "itemSku": "ATC-60029-00359-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--ATC-60029-00359",
      "url": "/p/samsung-galaxy-a51-smartphone-8gb-128gb/ps--ATC-60029-00359?ds=ATC-60029-00359-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=W4FjR0w/BoC2xJDFwaNKP54gguGb0aizX3KNa98oObzffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3053605&pid=ATC-60029-00359",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Palembang",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Silver",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-silver.png"
      },
      "level0Id": "PRI-127978-00",
      "uniqueSellingPoint": "<p>&nbsp;</p>\n<ul>\n<li>Display Size : 6.5 Inch full rectangle</li>\n<li>Resolusi : 1080 x 2400 (FHD+), Super AMOLED</li>\n<li>Rear Camera : 48.0 MP + 12.0 MP + 5.0 MP + 5.0 MP</li>\n<li>Front Camera : 32.0 MP</li>\n<li>Prosesor : Exynos 9611, Baterai : 4000 mAh</li>\n</ul>",
      "isCheap": true,
      "merchantName": "athens celullar",
      "soldRangeCount": {
        "en": "1",
        "id": "1"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "INL-60035-00986",
      "sku": "INL-60035-00986",
      "merchantCode": "INL-60035",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A33 5G Smartphone [6/128 GB]",
      "price": {
        "priceDisplay": "Rp4.260.000",
        "strikeThroughPriceDisplay": "Rp4.699.000",
        "discount": 9,
        "minPrice": 4260000.0,
        "offerPriceDisplay": "Rp4.370.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full33_elzsxi7r.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full02_lhtutasw.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full34_bflsv7fb.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full35_k8lw549v.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full36_sv12ae5l.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full37_oqqp9cjp.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full38_i8n5063e.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full39_caf4jibx.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 4,
        "count": 56,
        "absoluteRating": 4.9
      },
      "itemCount": 4,
      "defaultSku": "INL-60035-00986-00001",
      "itemSku": "INL-60035-00986-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR",
        "BLIBLI_SHIPPING",
        "FLASH_SALE_CAMPAIGN",
        "TUKAR_TAMBAH"
      ],
      "formattedId": "ps--INL-60035-00986",
      "url": "/p/samsung-galaxy-a33-5g-smartphone-6-128-gb/ps--INL-60035-00986?ds=INL-60035-00986-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=7Fn6la5zdWJ0RP8P/jQQQdQ5IdgP7w9Uin0bXUCwB0DffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3046516&pid=INL-60035-00986",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 4
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoBadgeUrl": "https://www.static-src.com/fs/asset/04_2022/tag-label-3d3c7614d92a.png",
      "promoEndTime": 1652720399000,
      "debugData": {

      },
      "campaignInfo": {
        "name": "Flash Sale",
        "code": "CAMP-01008"
      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp4.260.000",
            "strikeThroughPriceDisplay": "Rp4.699.000",
            "discount": 9,
            "minPrice": 4260000.0,
            "offerPriceDisplay": "Rp4.370.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full33_elzsxi7r.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full02_lhtutasw.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full34_bflsv7fb.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full35_k8lw549v.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full36_sv12ae5l.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full37_oqqp9cjp.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full38_i8n5063e.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full39_caf4jibx.jpg"
          ],
          "review": {
            "rating": 4,
            "count": 56,
            "absoluteRating": 4.9
          },
          "itemCount": 0,
          "defaultSku": "INL-60035-00986-00001",
          "tags": [
            "PRISTINE",
            "ZERO_PERCENT_INSTALLMENT",
            "BLIBLI_SHIPPING",
            "FLASH_SALE_CAMPAIGN",
            "TUKAR_TAMBAH"
          ],
          "url": "/p/samsung-galaxy-a33-5g-smartphone-6-128-gb/ps--INL-60035-00986?ds=INL-60035-00986-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=7Fn6la5zdWJ0RP8P/jQQQfjuaJclV6FrOopf3FQJeJXuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3046516&pid=INL-60035-00986",
          "promoEndTime": 1652720399000,
          "campaignInfo": {
            "name": "Flash Sale",
            "code": "CAMP-01008"
          },
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp4.260.000",
            "strikeThroughPriceDisplay": "Rp4.699.000",
            "discount": 9,
            "minPrice": 4260000.0,
            "offerPriceDisplay": "Rp4.370.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full40_den8n0g5.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full10_sgockhhw.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full41_ojfz8vvt.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full42_rizyzcu3.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full43_gq434blz.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full44_ba2fha7u.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full45_lbz86pvs.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full46_qn637tph.jpg"
          ],
          "review": {
            "rating": 4,
            "count": 56,
            "absoluteRating": 4.9
          },
          "itemCount": 0,
          "defaultSku": "INL-60035-00986-00002",
          "tags": [
            "PRISTINE",
            "ZERO_PERCENT_INSTALLMENT",
            "BLIBLI_SHIPPING",
            "FLASH_SALE_CAMPAIGN",
            "TUKAR_TAMBAH"
          ],
          "url": "/p/samsung-galaxy-a33-5g-smartphone-6-128-gb/ps--INL-60035-00986?ds=INL-60035-00986-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=7Fn6la5zdWJ0RP8P/jQQQfjuaJclV6FrOopf3FQJeJXuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3046516&pid=INL-60035-00986",
          "promoEndTime": 1652720399000,
          "campaignInfo": {
            "name": "Flash Sale",
            "code": "CAMP-01008"
          },
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp4.260.000",
            "strikeThroughPriceDisplay": "Rp4.699.000",
            "discount": 9,
            "minPrice": 4260000.0,
            "offerPriceDisplay": "Rp4.370.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full47_rsdeedcm.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full18_pq8xjbrw.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full48_hzniz5bn.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full49_k7kh17jo.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full50_o2neh5h5.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full51_uzcgzcz.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full52_kks8wnz8.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full53_sel6r0w8.jpg"
          ],
          "review": {
            "rating": 4,
            "count": 56,
            "absoluteRating": 4.9
          },
          "itemCount": 0,
          "defaultSku": "INL-60035-00986-00003",
          "tags": [
            "PRISTINE",
            "ZERO_PERCENT_INSTALLMENT",
            "BLIBLI_SHIPPING",
            "FLASH_SALE_CAMPAIGN",
            "TUKAR_TAMBAH"
          ],
          "url": "/p/samsung-galaxy-a33-5g-smartphone-6-128-gb/ps--INL-60035-00986?ds=INL-60035-00986-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=7Fn6la5zdWJ0RP8P/jQQQfjuaJclV6FrOopf3FQJeJXuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3046516&pid=INL-60035-00986",
          "promoEndTime": 1652720399000,
          "campaignInfo": {
            "name": "Flash Sale",
            "code": "CAMP-01008"
          },
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp4.260.000",
            "strikeThroughPriceDisplay": "Rp4.699.000",
            "discount": 9,
            "minPrice": 4260000.0,
            "offerPriceDisplay": "Rp4.370.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full54_u0rh32q3.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full26_lnvuhhi5.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full55_rthjvmcx.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full56_n6d3z8dq.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full57_uhzxitxl.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full58_qio9047l.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full59_gh0j00lj.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//95/MTA-42168370/samsung_samsung_galaxy_a33_5g_smartphone_-6-128_gb-_full60_fmhw9ids.jpg"
          ],
          "review": {
            "rating": 4,
            "count": 56,
            "absoluteRating": 4.9
          },
          "itemCount": 0,
          "defaultSku": "INL-60035-00986-00004",
          "tags": [
            "PRISTINE",
            "ZERO_PERCENT_INSTALLMENT",
            "BLIBLI_SHIPPING",
            "FLASH_SALE_CAMPAIGN",
            "TUKAR_TAMBAH"
          ],
          "url": "/p/samsung-galaxy-a33-5g-smartphone-6-128-gb/ps--INL-60035-00986?ds=INL-60035-00986-00004&source=SEARCH&sid=53aa86b1db87a3e6&metaData=7Fn6la5zdWJ0RP8P/jQQQfjuaJclV6FrOopf3FQJeJXuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3046516&pid=INL-60035-00986",
          "promoEndTime": 1652720399000,
          "campaignInfo": {
            "name": "Flash Sale",
            "code": "CAMP-01008"
          },
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kota Tangerang",
      "numLocations": 2,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "PRI-1336253-03",
      "uniqueSellingPoint": "• Processor Exynos 1280<br>• Size 6.4\"<br>• Rear Camera Resolution 48.0 MP OIS + 8.0 MP + 5.0 MP + 2.0 MP ; Front Camera Resolution 13.0 MP<br>• Battery Capacity 5000mAh",
      "isCheap": true,
      "merchantName": "indijaya cell shop official store",
      "soldRangeCount": {
        "en": "171",
        "id": "171"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "GAI-60039-01547",
      "sku": "GAI-60039-01547",
      "merchantCode": "GAI-60039",
      "status": "AVAILABLE",
      "name": "Samsung A03 Core 2/32GB - GARANSI SEIN",
      "price": {
        "priceDisplay": "Rp1.179.000",
        "strikeThroughPriceDisplay": "Rp1.549.000",
        "discount": 23,
        "minPrice": 1179000.0,
        "offerPriceDisplay": "Rp1.179.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full01_smmvjx27.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full06_i3gs5c5n.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full07_uzjgc1g8.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full08_qvltxzd5.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full09_heoc57h3.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full10_g1ryblv6.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full11_ffzojkul.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//91/MTA-33660261/samsung_samsung_a03_core_2-32gb_-_garansi_sein_full12_evo5pqsd.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 6,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "GAI-60039-01547-00002",
      "itemSku": "GAI-60039-01547-00002",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--GAI-60039-01547",
      "url": "/p/samsung-a03-core-2-32gb-garansi-sein/ps--GAI-60039-01547?ds=GAI-60039-01547-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=sZwZ850BToUHrZIHjkv5mxE/z3pOsK9oLBSnsOeNaGTffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3079446&pid=GAI-60039-01547",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651856400000,
        "delayShipping": true
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Jakarta Pusat",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Silver",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-silver.png"
      },
      "level0Id": "MTA-33660261",
      "uniqueSellingPoint": "• 5,000mAh (Typical)\n<br>• Octa-Core (Quad 1.6GHz + Quad 1.2GHz)\n<br>• 6.5-inch HD+ Infinity-V\n<br>• Accelerometer Sensor, Light Sensor, Proximity Sensor\n<br>• Garansi resmi",
      "isCheap": true,
      "merchantName": "gadgetori official store",
      "soldRangeCount": {
        "en": "49",
        "id": "49"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "SIA-60028-01360",
      "sku": "SIA-60028-01360",
      "merchantCode": "SIA-60028",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy Tab S6 Lite 4/128",
      "price": {
        "priceDisplay": "Rp5.819.000",
        "discount": 0,
        "minPrice": 5819000.0,
        "offerPriceDisplay": "Rp5.819.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-23117136/samsung_samsung_galaxy_tab_s6_lite_6-128_full02_p0i1gh27.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-23117136/samsung_samsung_galaxy_tab_s6_lite_6-128_full01_pfoi8pzr.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-23117136/samsung_samsung_galaxy_tab_s6_lite_6-128_full03_qwhvflib.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 30,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "SIA-60028-01360-00003",
      "itemSku": "SIA-60028-01360-00003",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--SIA-60028-01360",
      "url": "/p/samsung-galaxy-tab-s6-lite-4-128/ps--SIA-60028-01360?ds=SIA-60028-01360-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=pOilVZ2fvVhCNmBQQBsD39BGReed4M7K67x90M0xwR/ffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3034298&pid=SIA-60028-01360",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "TA-1000004",
        "TA-1000003"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Jakarta Pusat",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "MTA-23117136",
      "uniqueSellingPoint": "• Fitur Produk <br>• S Pen (Magnetic Attachment) <br>• 10.4 inch display <br>• 7,040mAh battery <br>• Samsung Knox Dual Speakers with Dolby <br>• Atmos & sound by AKG Micro SD + SIM Card",
      "isCheap": true,
      "merchantName": "jikalaku official store",
      "soldRangeCount": {
        "en": "258",
        "id": "258"
      },
      "categoryIdHierarchy": [
        "54593",
        "TA-1000003",
        "TA-1000004"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "SNM-48990-00912",
      "sku": "SNM-48990-00912",
      "merchantCode": "SNM-48990",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A13 - A135 - 6/128GB - GARANSI RESMI SEIN",
      "price": {
        "priceDisplay": "Rp2.699.000",
        "discount": 0,
        "minPrice": 2699000.0,
        "offerPriceDisplay": "Rp2.699.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-42480376/samsung_samsung_galaxy_a13_-_a135_-_6-128gb_-_garansi_resmi_sein_full01_kbon2w8v.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 3,
      "defaultSku": "SNM-48990-00912-00001",
      "itemSku": "SNM-48990-00912-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--SNM-48990-00912",
      "url": "/p/samsung-galaxy-a13-a135-6-128gb-garansi-resmi-sein/ps--SNM-48990-00912?ds=SNM-48990-00912-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=HyDyuwQUPjveBGs0RvlQ9XYgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00912",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 3
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651683600000,
        "delayShipping": true
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp2.699.000",
            "discount": 0,
            "minPrice": 2699000.0,
            "offerPriceDisplay": "Rp2.699.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-42480376/samsung_samsung_galaxy_a13_-_a135_-_6-128gb_-_garansi_resmi_sein_full01_kbon2w8v.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "SNM-48990-00912-00001",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-a13-a135-6-128gb-garansi-resmi-sein/ps--SNM-48990-00912?ds=SNM-48990-00912-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=HyDyuwQUPjveBGs0RvlQ9VEe/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00912",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp2.699.000",
            "discount": 0,
            "minPrice": 2699000.0,
            "offerPriceDisplay": "Rp2.699.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-42480376/samsung_samsung_galaxy_a13_-_a135_-_6-128gb_-_garansi_resmi_sein_full02_u7dq0ioy.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "SNM-48990-00912-00002",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-a13-a135-6-128gb-garansi-resmi-sein/ps--SNM-48990-00912?ds=SNM-48990-00912-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=HyDyuwQUPjveBGs0RvlQ9VEe/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00912",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp2.699.000",
            "discount": 0,
            "minPrice": 2699000.0,
            "offerPriceDisplay": "Rp2.699.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-42480376/samsung_samsung_galaxy_a13_-_a135_-_6-128gb_-_garansi_resmi_sein_full03_qon9j0ms.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "SNM-48990-00912-00003",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-a13-a135-6-128gb-garansi-resmi-sein/ps--SNM-48990-00912?ds=SNM-48990-00912-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=HyDyuwQUPjveBGs0RvlQ9VEe/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00912",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kota Bandung",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "MTA-42480376",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "snoopy mobile phone shop official store",
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "SNM-48990-00752",
      "sku": "SNM-48990-00752",
      "merchantCode": "SNM-48990",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A32 - A325 - 8/128GB - GARANSI RESMI SEIN",
      "price": {
        "priceDisplay": "Rp3.599.000",
        "strikeThroughPriceDisplay": "Rp3.799.000",
        "discount": 5,
        "minPrice": 3599000.0,
        "offerPriceDisplay": "Rp3.599.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12093923/samsung_samsung_galaxy_a32_-_a325_-_8-128gb_-_garansi_resmi_sein_full02_kjxwbwk3.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 2,
      "defaultSku": "SNM-48990-00752-00002",
      "itemSku": "SNM-48990-00752-00002",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--SNM-48990-00752",
      "url": "/p/samsung-galaxy-a32-a325-8-128gb-garansi-resmi-sein/ps--SNM-48990-00752?ds=SNM-48990-00752-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=/M3DcOYJQbB9W1qjyqklZ3YgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00752",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 2
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651683600000,
        "delayShipping": true
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp3.599.000",
            "strikeThroughPriceDisplay": "Rp3.799.000",
            "discount": 5,
            "minPrice": 3599000.0,
            "offerPriceDisplay": "Rp3.599.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12093923/samsung_samsung_galaxy_a32_-_a325_-_8-128gb_-_garansi_resmi_sein_full02_kjxwbwk3.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "SNM-48990-00752-00002",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-a32-a325-8-128gb-garansi-resmi-sein/ps--SNM-48990-00752?ds=SNM-48990-00752-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=/M3DcOYJQbB9W1qjyqklZ1Ee/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00752",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp3.599.000",
            "strikeThroughPriceDisplay": "Rp3.799.000",
            "discount": 5,
            "minPrice": 3599000.0,
            "offerPriceDisplay": "Rp3.599.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-12093923/samsung_samsung_galaxy_a32_-_a325_-_8-128gb_-_garansi_resmi_sein_full04_gwz51j3b.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "SNM-48990-00752-00004",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-a32-a325-8-128gb-garansi-resmi-sein/ps--SNM-48990-00752?ds=SNM-48990-00752-00004&source=SEARCH&sid=53aa86b1db87a3e6&metaData=/M3DcOYJQbB9W1qjyqklZ1Ee/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3015696&pid=SNM-48990-00752",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kota Bandung",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "SNM-48990-00752",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "snoopy mobile phone shop official store",
      "soldRangeCount": {
        "en": "2",
        "id": "2"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "SHS-70191-00004",
      "sku": "SHS-70191-00004",
      "merchantCode": "SHS-70191",
      "status": "AVAILABLE",
      "name": "samsung a50s",
      "price": {
        "priceDisplay": "Rp3.500.000",
        "discount": 0,
        "minPrice": 3500000.0,
        "offerPriceDisplay": "Rp3.500.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-20345915/samsung_samsung_a50s_full01_0bc1bec0.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 1,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "SHS-70191-00004-00001",
      "itemSku": "SHS-70191-00004-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "BIG_PRODUCT"
      ],
      "formattedId": "ps--SHS-70191-00004",
      "url": "/p/samsung-a50s/ps--SHS-70191-00004?ds=SHS-70191-00004-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=/M3DcOYJQbB9W1qjyqklZ68RZl5yD1dY35xhvh5OndLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3231841&pid=SHS-70191-00004",
      "attributes": [
        {
          "count": 0
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Pekanbaru",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Bronze",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//11_2020/icon-top-rated-bronze.png"
      },
      "level0Id": "MTA-20345915",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "shabbi shop",
      "soldRangeCount": {
        "en": "1",
        "id": "1"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "FEO-16605-03274",
      "sku": "FEO-16605-03274",
      "merchantCode": "FEO-16605",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy Buds LIVE - Garansi Resmi",
      "price": {
        "priceDisplay": "Rp935.000",
        "strikeThroughPriceDisplay": "Rp2.499.000",
        "discount": 62,
        "minPrice": 935000.0,
        "offerPriceDisplay": "Rp935.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-10025419/samsung_samsung_galaxy_buds_live_-_garansi_resmi_full05_lwdam7vz.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-10025419/samsung_samsung_galaxy_buds_live_-_garansi_resmi_full04_tkp34quq.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-10025419/samsung_samsung_galaxy_buds_live_-_garansi_resmi_full03_epqqwgd.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-10025419/samsung_samsung_galaxy_buds_live_-_garansi_resmi_full02_m659lyht.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//87/MTA-10025419/samsung_samsung_galaxy_buds_live_-_garansi_resmi_full01_oc7xeccg.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 3,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "FEO-16605-03274-00001",
      "itemSku": "FEO-16605-03274-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR",
        "TUKAR_TAMBAH"
      ],
      "formattedId": "ps--FEO-16605-03274",
      "url": "/p/samsung-galaxy-buds-live-garansi-resmi/ps--FEO-16605-03274?ds=FEO-16605-03274-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=huaKm/mL165gO8y6F5KEWv3JJpp7Vw5PHglN989yq+6vCqH8eQGLmGsm6V/eqGDb&cnc=false&pickupPointCode=PP-3140310&pid=FEO-16605-03274",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "WE-1000001",
        "54593",
        "WE-1000006"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Jakarta Pusat",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Gold",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      },
      "level0Id": "MTA-10025419",
      "uniqueSellingPoint": "<p>Warna meliputi </p> \n<ul> \n <li>Mystic Black</li> \n <li>Mystic White</li> \n <li>Mystic Bronze.</li> \n</ul> \n<p> </p>",
      "isCheap": true,
      "merchantName": "super gadget official store",
      "soldRangeCount": {
        "en": "17",
        "id": "17"
      },
      "categoryIdHierarchy": [
        "54593",
        "WE-1000001",
        "WE-1000006"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "TIP-60022-00843",
      "sku": "TIP-60022-00843",
      "merchantCode": "TIP-60022",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A12 4/128GB",
      "price": {
        "priceDisplay": "Rp2.299.000",
        "strikeThroughPriceDisplay": "Rp2.399.000",
        "discount": 4,
        "minPrice": 2299000.0,
        "offerPriceDisplay": "Rp2.299.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-13618775/samsung_samsung_galaxy_a12_4-128gb_full01_ivh0c8tu.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-13618775/samsung_samsung_galaxy_a12_4-128gb_full04_tcxdwvu9.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-13618775/samsung_samsung_galaxy_a12_4-128gb_full03_mup4lf43.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-13618775/samsung_samsung_galaxy_a12_4-128gb_full02_bf8tkufg.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 6,
      "defaultSku": "TIP-60022-00843-00001",
      "itemSku": "TIP-60022-00843-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "CNC_AVAILABLE",
        "REGULAR"
      ],
      "formattedId": "ps--TIP-60022-00843",
      "url": "/p/samsung-galaxy-a12-4-128gb/ps--TIP-60022-00843?ds=TIP-60022-00843-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=BGFzUV9JheIuIn59zCBUcHYgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3022839&pid=TIP-60022-00843",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 3
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Malang",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Bronze",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//11_2020/icon-top-rated-bronze.png"
      },
      "level0Id": "MTA-13618775",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "tiga putra  official store",
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "COR-70000-00503",
      "sku": "COR-70000-00503",
      "merchantCode": "COR-70000",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A23 LTE 6/128GB",
      "price": {
        "priceDisplay": "Rp3.499.000",
        "strikeThroughPriceDisplay": "Rp3.599.000",
        "discount": 2,
        "minPrice": 3499000.0,
        "offerPriceDisplay": "Rp3.499.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-44044439/samsung_samsung_galaxy_a23_lte_6-128gb__full02_sm4r634a.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 3,
      "defaultSku": "COR-70000-00503-00002",
      "itemSku": "COR-70000-00503-00002",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "CNC_AVAILABLE",
        "REGULAR"
      ],
      "formattedId": "ps--COR-70000-00503",
      "url": "/p/samsung-galaxy-a23-lte-6-128gb/ps--COR-70000-00503?ds=COR-70000-00503-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=lU+cvSK9HBqBms3HToKGlnYgRs2HFQu/ivYDRlhgnpLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3144747&pid=COR-70000-00503",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 2
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651597200000,
        "delayShipping": true
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp3.499.000",
            "strikeThroughPriceDisplay": "Rp3.599.000",
            "discount": 2,
            "minPrice": 3499000.0,
            "offerPriceDisplay": "Rp3.499.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-44044439/samsung_samsung_galaxy_a23_lte_6-128gb__full02_sm4r634a.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "COR-70000-00503-00002",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE"
          ],
          "url": "/p/samsung-galaxy-a23-lte-6-128gb/ps--COR-70000-00503?ds=COR-70000-00503-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=lU+cvSK9HBqBms3HToKGllEe/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3144747&pid=COR-70000-00503",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Gold",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp3.499.000",
            "strikeThroughPriceDisplay": "Rp3.599.000",
            "discount": 2,
            "minPrice": 3499000.0,
            "offerPriceDisplay": "Rp3.499.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//96/MTA-44044439/samsung_samsung_galaxy_a23_lte_6-128gb__full03_ifkj8hl8.jpg"
          ],
          "review": {
            "rating": 0,
            "count": 0,
            "absoluteRating": 0.0
          },
          "itemCount": 0,
          "defaultSku": "COR-70000-00503-00003-PP-3149744",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE",
            "CNC_PRODUCT"
          ],
          "url": "/p/samsung-galaxy-a23-lte-6-128gb/ps--COR-70000-00503?ds=COR-70000-00503-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=lU+cvSK9HBqBms3HToKGllEe/rP35225phf0Xj5yOIbuowq0univimq0SD65T+N0&cnc=true&pickupPointCode=PP-3149744&pid=COR-70000-00503",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Gold",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kab. Cirebon",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Gold",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      },
      "level0Id": "MTA-44044439",
      "uniqueSellingPoint": "• PLATFORM     OS       Android 12, One UI 4.1\n<br>• MAIN CAMERA          Quad   50 MP, f/1.8, (wide), PDAF, OIS\n<br>• Type    Li-Po 5000 mAh",
      "isCheap": true,
      "merchantName": "complete.selular official store",
      "soldRangeCount": {
        "en": "3",
        "id": "3"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "JAE-70081-00178",
      "sku": "JAE-70081-00178",
      "merchantCode": "JAE-70081",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A03 3/32GB New Segel Box Garansi Resmi Promo Bandung",
      "price": {
        "priceDisplay": "Rp1.461.538",
        "discount": 0,
        "minPrice": 1461538.0,
        "offerPriceDisplay": "Rp1.461.538"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//92/MTA-37141265/samsung_samsung_galaxy_a03_3-32gb_new_segel_box_garansi_resmi_promo_bandung_full01_q3lwly8i.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 0,
        "count": 0,
        "absoluteRating": 0.0
      },
      "itemCount": 1,
      "defaultSku": "JAE-70081-00178-00001",
      "itemSku": "JAE-70081-00178-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--JAE-70081-00178",
      "url": "/p/samsung-galaxy-a03-3-32gb-new-segel-box-garansi-resmi-promo-bandung/ps--JAE-70081-00178?ds=JAE-70081-00178-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=wpuwn+83VwuuoIwIPnHiManKpq0fP0vWW6wgDItLyxXffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3230862&pid=JAE-70081-00178",
      "attributes": [
        {
          "count": 0
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Bandung",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Gold",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-gold.png"
      },
      "level0Id": "MTA-37141265",
      "uniqueSellingPoint": "• Processor Unisoc T606\n<br>• Display 6.5\" HD + PLs LCD\n<br>• Rear Camera 48mp + 2 mp , front camera 5mp\n<br>• Ram 3GB , Rom 32 GB\n<br>• Battery 5000mAh",
      "isCheap": true,
      "merchantName": "jalaprang elektronik",
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "ALE-60038-00090",
      "sku": "ALE-60038-00090",
      "merchantCode": "ALE-60038",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A03 Core Smartphone [2GB/32GB]",
      "price": {
        "priceDisplay": "Rp1.165.000",
        "discount": 0,
        "minPrice": 1165000.0,
        "offerPriceDisplay": "Rp1.165.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//110/MTA-36996374/samsung_samsung_galaxy_a03_core_ram_2-32gb_garansi_resmi_full01_odg9w66r.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 4,
        "count": 9,
        "absoluteRating": 4.8
      },
      "itemCount": 1,
      "defaultSku": "ALE-60038-00090-00002",
      "itemSku": "ALE-60038-00090-00002",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--ALE-60038-00090",
      "url": "/p/samsung-galaxy-a03-core-smartphone-2gb-32gb/ps--ALE-60038-00090?ds=ALE-60038-00090-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=sZwZ850BToUHrZIHjkv5m0jdooOLMBocH0we1klI83fffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3049510&pid=ALE-60038-00090",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 1651683600000,
        "delayShipping": true
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Bogor",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "PRI-137954-00",
      "uniqueSellingPoint": "• dimensi layarnya pun jadi ikutan meningkat, dari yang semula 5.3 inci pada A01 Core kini menjadi 6.5 inci. Sedangkan untuk panel layarnya, menggunakan TFT pada resolusi HD+ (720p). Hadir dengan Baterai 5.000 mAh, Performa yang Tergolong Lancar untuk Keseharian, Hadir dengan 3-card Slot",
      "isCheap": true,
      "merchantName": "allshare",
      "soldRangeCount": {
        "en": "505",
        "id": "505"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "SIA-60028-01274",
      "sku": "SIA-60028-01274",
      "merchantCode": "SIA-60028",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy M12 Smartphone [4 GB/ 64 GB]",
      "price": {
        "priceDisplay": "Rp1.860.000",
        "discount": 0,
        "minPrice": 1860000.0,
        "offerPriceDisplay": "Rp1.860.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full08.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full07.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full9.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full10.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full11.jpg",
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full12.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 4,
        "count": 37,
        "absoluteRating": 4.9
      },
      "itemCount": 2,
      "defaultSku": "SIA-60028-01274-00001",
      "itemSku": "SIA-60028-01274-00001",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--SIA-60028-01274",
      "url": "/p/samsung-galaxy-m12-smartphone-4-gb-64-gb/ps--SIA-60028-01274?ds=SIA-60028-01274-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=NJCHbYqZplqzsJP0Zn5WGpAyBASKwk2jE7xvxPR+4FDffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3034298&pid=SIA-60028-01274",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 2
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp1.860.000",
            "discount": 0,
            "minPrice": 1860000.0,
            "offerPriceDisplay": "Rp1.860.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full08.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full07.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full9.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full10.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full11.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full12.jpg"
          ],
          "review": {
            "rating": 4,
            "count": 37,
            "absoluteRating": 4.9
          },
          "itemCount": 0,
          "defaultSku": "SIA-60028-01274-00001",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-m12-smartphone-4-gb-64-gb/ps--SIA-60028-01274?ds=SIA-60028-01274-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=NJCHbYqZplqzsJP0Zn5WGhVPc8nmQ1IQBWFtav4M/tPuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3034298&pid=SIA-60028-01274",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp1.860.000",
            "discount": 0,
            "minPrice": 1860000.0,
            "offerPriceDisplay": "Rp1.860.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full02.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full01.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full03.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full04.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full05.jpg",
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//101/MTA-14036779/samsung_samsung_full06.jpg"
          ],
          "review": {
            "rating": 4,
            "count": 37,
            "absoluteRating": 4.9
          },
          "itemCount": 0,
          "defaultSku": "SIA-60028-01274-00003",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT"
          ],
          "url": "/p/samsung-galaxy-m12-smartphone-4-gb-64-gb/ps--SIA-60028-01274?ds=SIA-60028-01274-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=NJCHbYqZplqzsJP0Zn5WGhVPc8nmQ1IQBWFtav4M/tPuowq0univimq0SD65T+N0&cnc=false&pickupPointCode=PP-3034298&pid=SIA-60028-01274",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "Diamond",
            "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kota Jakarta Pusat",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "MTA-14036779",
      "uniqueSellingPoint": "• Infinity-V Display<br>• OS Andorid 11<br>• Chipset Exynos 850 (8nm)<br>• CPU Octa-core 2GHz<br>• Main Camera Quad 48MP + 5MP + 2MP + 2MP<br>• Selfie Camera 8MP<br>• Battery 5000 mAh",
      "isCheap": true,
      "merchantName": "jikalaku official store",
      "soldRangeCount": {
        "en": "675",
        "id": "675"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "PLC-70020-00048",
      "sku": "PLC-70020-00048",
      "merchantCode": "PLC-70020",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A13 4/128GB",
      "price": {
        "priceDisplay": "Rp2.500.000",
        "discount": 0,
        "minPrice": 2500000.0,
        "offerPriceDisplay": "Rp2.500.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//99/MTA-41716827/samsung_samsung_galaxy_a13_4-128gb_full01_f98d02d4.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 1,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "PLC-70020-00048-00001",
      "itemSku": "PLC-70020-00048-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--PLC-70020-00048",
      "url": "/p/samsung-galaxy-a13-4-128gb/ps--PLC-70020-00048?ds=PLC-70020-00048-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=pKI0rI3whWvGJoG+v4fOKa8RZl5yD1dY35xhvh5OndLffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3260223&pid=PLC-70020-00048",
      "attributes": [
        {
          "count": 0
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Depok",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "PRI-1340416-03",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "rajasmartphone19",
      "soldRangeCount": {
        "en": "1",
        "id": "1"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "WIL-60029-00540",
      "sku": "WIL-60029-00540",
      "merchantCode": "WIL-60029",
      "status": "AVAILABLE",
      "name": "Samsung A03 4/64 GB Garansi Resmi No Repack",
      "price": {
        "priceDisplay": "Rp1.000.000 - Rp1.799.000",
        "discount": 0,
        "minPrice": 1000000.0
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-37178364/samsung_samsung_a03_4-64_gb_garansi_resmi_no_repack_full02_h1jegx08.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 2,
        "absoluteRating": 5.0
      },
      "itemCount": 6,
      "defaultSku": "WIL-60029-00540-00002-PP-3255065",
      "itemSku": "WIL-60029-00540-00002",
      "tags": [
        "ZERO_PERCENT_INSTALLMENT",
        "CNC_AVAILABLE",
        "CNC_PRODUCT",
        "REGULAR"
      ],
      "formattedId": "ps--WIL-60029-00540",
      "url": "/p/samsung-a03-4-64-gb-garansi-resmi-no-repack/ps--WIL-60029-00540?ds=WIL-60029-00540-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=eWIGizKxTJ/mTyQZ+mDT0a8RZl5yD1dY35xhvh5OndLffS7M1dp4YUIlsODP6NAs&cnc=true&pickupPointCode=PP-3255065&pid=WIL-60029-00540",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 3
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp1.000.000",
            "strikeThroughPriceDisplay": "Rp1.799.000",
            "discount": 44,
            "minPrice": 1000000.0,
            "offerPriceDisplay": "Rp1.000.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-37178364/samsung_samsung_a03_4-64_gb_garansi_resmi_no_repack_full02_h1jegx08.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "WIL-60029-00540-00002-PP-3255065",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE",
            "CNC_PRODUCT"
          ],
          "url": "/p/samsung-a03-4-64-gb-garansi-resmi-no-repack/ps--WIL-60029-00540?ds=WIL-60029-00540-00002&source=SEARCH&sid=53aa86b1db87a3e6&metaData=eWIGizKxTJ/mTyQZ+mDT0Y+kcJJgZlq08S4qGunLR6Tuowq0univimq0SD65T+N0&cnc=true&pickupPointCode=PP-3255065&pid=WIL-60029-00540",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "None",
            "merchantBadgeUrl": "None"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp1.000.000",
            "strikeThroughPriceDisplay": "Rp1.799.000",
            "discount": 44,
            "minPrice": 1000000.0,
            "offerPriceDisplay": "Rp1.000.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-37178364/samsung_samsung_a03_4-64_gb_garansi_resmi_no_repack_full03_it5fj600.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "WIL-60029-00540-00003-PP-3255065",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE",
            "CNC_PRODUCT"
          ],
          "url": "/p/samsung-a03-4-64-gb-garansi-resmi-no-repack/ps--WIL-60029-00540?ds=WIL-60029-00540-00003&source=SEARCH&sid=53aa86b1db87a3e6&metaData=eWIGizKxTJ/mTyQZ+mDT0Y+kcJJgZlq08S4qGunLR6Tuowq0univimq0SD65T+N0&cnc=true&pickupPointCode=PP-3255065&pid=WIL-60029-00540",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "None",
            "merchantBadgeUrl": "None"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        },
        {
          "status": "AVAILABLE",
          "price": {
            "priceDisplay": "Rp1.000.000",
            "strikeThroughPriceDisplay": "Rp1.799.000",
            "discount": 44,
            "minPrice": 1000000.0,
            "offerPriceDisplay": "Rp1.000.000"
          },
          "images": [
            "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//102/MTA-37178364/samsung_samsung_a03_4-64_gb_garansi_resmi_no_repack_full01_uufl1lk4.jpg"
          ],
          "review": {
            "rating": 5,
            "count": 2,
            "absoluteRating": 5.0
          },
          "itemCount": 0,
          "defaultSku": "WIL-60029-00540-00001-PP-3255065",
          "tags": [
            "ZERO_PERCENT_INSTALLMENT",
            "CNC_AVAILABLE",
            "CNC_PRODUCT"
          ],
          "url": "/p/samsung-a03-4-64-gb-garansi-resmi-no-repack/ps--WIL-60029-00540?ds=WIL-60029-00540-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=eWIGizKxTJ/mTyQZ+mDT0Y+kcJJgZlq08S4qGunLR6Tuowq0univimq0SD65T+N0&cnc=true&pickupPointCode=PP-3255065&pid=WIL-60029-00540",
          "promoEndTime": 0,
          "merchantVoucherCount": 0,
          "numLocations": 0,
          "badge": {
            "merchantBadge": "None",
            "merchantBadgeUrl": "None"
          },
          "cartLogisticOptions": [

          ],
          "preorder": false,
          "official": false
        }
      ],
      "location": "Kab. Pekalongan",
      "numLocations": 2,
      "badge": {
        "merchantBadge": "None",
        "merchantBadgeUrl": "None"
      },
      "level0Id": "MTA-37178364",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "widji_cell official store",
      "soldRangeCount": {
        "en": "5",
        "id": "5"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": true
    },
    {
      "id": "HYI-60022-00110",
      "sku": "HYI-60022-00110",
      "merchantCode": "HYI-60022",
      "status": "AVAILABLE",
      "name": "Samsung UA32T4001AKXXD HD TV [32 Inch] - 32T4001 USB MOVIE",
      "price": {
        "priceDisplay": "Rp2.209.999",
        "strikeThroughPriceDisplay": "Rp2.699.999",
        "discount": 18,
        "minPrice": 2209999.0,
        "offerPriceDisplay": "Rp2.209.999"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//93/MTA-28460252/samsung_samsung_ua32t4001akxxd_hd_tv_-32_inch-_-_32t4001_usb_movie_full01_pnff0ztd.jpg"
      ],
      "rootCategory": {
        "id": "54650",
        "name": "Peralatan Elektronik"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 5,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "HYI-60022-00110-00001",
      "itemSku": "HYI-60022-00110-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--HYI-60022-00110",
      "url": "/p/samsung-ua32t4001akxxd-hd-tv-32-inch-32t4001-usb-movie/ps--HYI-60022-00110?ds=HYI-60022-00110-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=BGFzUV9JheIuIn59zCBUcD3SnU0Xg9T55OtueDJfe9TffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3073258&pid=HYI-60022-00110",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "BA-1000501",
        "54650",
        "BA-1000503",
        "TE-1000002",
        "TE-1000004"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Bandung",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Diamond",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset///07_2020/icon-top-rated-diamond.png"
      },
      "level0Id": "PRI-1118268-03",
      "uniqueSellingPoint": "",
      "isCheap": true,
      "merchantName": "hythi",
      "soldRangeCount": {
        "en": "12",
        "id": "12"
      },
      "categoryIdHierarchy": [
        "54650",
        "TE-1000002",
        "TE-1000004",
        "BA-1000501",
        "BA-1000503"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    },
    {
      "id": "KEC-60035-00039",
      "sku": "KEC-60035-00039",
      "merchantCode": "KEC-60035",
      "status": "AVAILABLE",
      "name": "Samsung Galaxy A13 Smartphone A13 6/128",
      "price": {
        "priceDisplay": "Rp2.545.000",
        "strikeThroughPriceDisplay": "Rp2.799.000",
        "discount": 9,
        "minPrice": 2545000.0,
        "offerPriceDisplay": "Rp2.545.000"
      },
      "images": [
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/medium//98/MTA-44043874/samsung_samsung_galaxy_a13_smartphone__a13_6-128_full01_mt74m2z.jpg"
      ],
      "rootCategory": {
        "id": "54593",
        "name": "Handphone & Tablet"
      },
      "brand": "Samsung",
      "review": {
        "rating": 5,
        "count": 3,
        "absoluteRating": 5.0
      },
      "itemCount": 1,
      "defaultSku": "KEC-60035-00039-00001",
      "itemSku": "KEC-60035-00039-00001",
      "tags": [
        "PRISTINE",
        "ZERO_PERCENT_INSTALLMENT",
        "REGULAR"
      ],
      "formattedId": "ps--KEC-60035-00039",
      "url": "/p/samsung-galaxy-a13-smartphone-a13-6-128/ps--KEC-60035-00039?ds=KEC-60035-00039-00001&source=SEARCH&sid=53aa86b1db87a3e6&metaData=pKI0rI3whWvGJoG+v4fOKTPdS8EoIX8nGSJNjnieO4fffS7M1dp4YUIlsODP6NAs&cnc=false&pickupPointCode=PP-3052043&pid=KEC-60035-00039",
      "attributes": [
        {
          "optionListingType": "COLOR_PALETE",
          "values": [
            "MULTICOLOR"
          ],
          "count": 1
        }
      ],
      "productFeatures": "",
      "storeClosingInfo": {
        "storeClosed": false,
        "endDate": 0,
        "delayShipping": false
      },
      "promoEndTime": 0,
      "debugData": {

      },
      "allCategories": [
        "54593",
        "AN-1000001",
        "HA-1000002"
      ],
      "merchantVoucherCount": 0,
      "expandedProducts": [

      ],
      "location": "Kota Jakarta Barat",
      "numLocations": 0,
      "badge": {
        "merchantBadge": "Silver",
        "merchantBadgeUrl": "https://www.static-src.com//siva/asset//07_2020/icon-top-rated-silver.png"
      },
      "level0Id": "PRI-1350488-03",
      "uniqueSellingPoint": "• Processor Exynos 850\n<br>• Size 6.6”\n<br>• Rear Camera Resolution 50.0 MP + 5.0 MP + 2.0 MP + 2.0 MP ; Front Camera Resolution 8.0 MP\n<br>• Battery Capacity 5000mAh",
      "isCheap": true,
      "merchantName": "kevin cellular",
      "soldRangeCount": {
        "en": "87",
        "id": "87"
      },
      "categoryIdHierarchy": [
        "54593",
        "HA-1000002",
        "AN-1000001"
      ],
      "cartLogisticOptions": [

      ],
      "preorder": false,
      "official": false
    }
  ]

  /**
   * Holds the search text.
   */
  searchText = '';

  /**
   * Holds the start of the paginator, initialized to 0.
   */
  start = 0;

  /**
   * Holds the total number of products available,
   * Initializing it to 100 temporaryly, it will be assigned based on API response.
   */
  totalAvailableProductCount = 100;

  /**
   * Default constructor for ProductListComponent.
   */
  constructor(private productListService: ProductListService) {}

  /**
   * Default Life cycle hook: used to fetch product list based on initial searchText and start value.
   */
  ngOnInit(): void {
    this.getProductList();
  }

  /**
   * Used to invoke getProductList API along with filterParams.
   */
  private getProductList(): void {
    const filterParams: { searchText: string, start: number } = {
      searchText: this.searchText,
      start: this.start
    }
    // API to fetch product list.
    this.productListService.getProductList(filterParams).subscribe(response => {
      // Below line is commented due to CORS error in endpoint, else
      // API response will be assigned to productArray, which holds the list of products.
      // this.productArray = JSON.parse(JSON.stringify(response));
    });
  }

  /**
   * Invoked on page change.
   * used to fetch the product list based on start count.
   * @param paginatorEvent - PageEvent.
   */
  changePage(paginatorEvent: PageEvent) {
    this.start = paginatorEvent.pageIndex;
    this.getProductList();
  }

  /**
   * Method invoked on search text change and update product list based on API response.
   * @param searchText - holds the search string.
   */
  onSearch(searchText: string): void {
    this.searchText = searchText;
    this.getProductList();
  }

  /**
   * Invoked on click of close icon.
   * Used to clear the search text and update product list based on API response.
   */
  onClearSearch() {
    if (this.searchText !== '') {
      this.onSearch('');
    }
  }
}

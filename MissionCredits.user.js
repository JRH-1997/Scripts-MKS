// ==UserScript==
// @name         Missioncredits
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  NL versie van credits in meldingenlijst met dank aan itsDreyter voor de originele Duitse versie.
// @author       itsDreyter / JRH1997
// @match        https://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // array with credits..
    var aCredits = [
     110, /* 0 */ 170, /* 1 */ 370, /* 2 */ 340, /* 3 */ 200, /* 4 */ 1400, /* 5 */ 600, /* 6 */ 210, /* 7 */ 220, /* 8 */ 250, /* 9 */ 600, /* 10 */ 240, /* 11 */ 310, /* 12 */ 980, /* 13 */ 1000, /* 14 */ 500, /* 15 */ 1100, /* 16 */ 340, /* 17 */ 700, /* 18 */ 650, /* 19 */ 1800, /* 20 */ 2400, /* 21 */ 2700, /* 22 */ 1200, /* 23 */ 900, /* 24 */ 1000, /* 25 */ 3510, /* 26 */ NIET GEVONDEN, /* 27 */ 1600, /* 28 */ 2470, /* 29 */ 190, /* 30 */ 400, /* 31 */ 1310, /* 32 */ 1200, /* 33 */ 2100, /* 34 */ 2510, /* 35 */ 3110, /* 36 */ 110, /* 37 */ 110, /* 38 */ 110, /* 39 */ 110, /* 40 */ 10000, /* 41 */ 3720, /* 42 */ 10000, /* 43 */ 170, /* 44 */ 0, /* 45 */ 0, /* 46 */ 0, /* 47 */ 0, /* 48 */ 0, /* 49 */ 0, /* 50 */ 0, /* 51 */ 1800, /* 52 */ 1700, /* 53 */ 230, /* 54 */ 1000, /* 55 */ 3100, /* 56 */ 210, /* 57 */ 250, /* 58 */ 15000, /* 59 */ 800, /* 60 */ 500, /* 61 */ 2000, /* 62 */ 500, /* 63 */ 700, /* 64 */ 310, /* 65 */ 310, /* 66 */ 320, /* 67 */ 350, /* 68 */ 1000, /* 69 */ 200, /* 70 */ 200, /* 71 */ 200, /* 72 */ 200, /* 73 */ 500, /* 74 */ 300, /* 75 */ 3000, /* 76 */ 2000, /* 77 */ 350, /* 78 */ 0, /* 79 */ 0, /* 80 */ 200, /* 81 */ 1000, /* 82 */ 0, /* 83 */ 0, /* 84 */ 300, /* 85 */ 1000, /* 86 */ 0, /* 87 */ 0, /* 88 */ 0, /* 89 */ 0, /* 90 */ 0, /* 91 */ 0, /* 92 */ 0, /* 93 */ 0, /* 94 */ 0, /* 95 */ 0, /* 96 */ 0, /* 97 */ 600, /* 98 */ 550, /* 99 */ 1200, /* 100 */ 1200, /* 101 */ 1200, /* 102 */ 2400, /* 103 */ 130, /* 104 */ 140, /* 105 */ 140, /* 106 */ 540, /* 107 */ 1240, /* 108 */ 740, /* 109 */ 500, /* 110 */ 1500, /* 111 */ 400, /* 112 */ 1000, /* 113 */ 1000, /* 114 */ 1400, /* 115 */ 3000, /* 116 */ 6000, /* 117 */ 3700, /* 118 */ 2000, /* 119 */ 4000, /* 120 */ 1000, /* 121 */ 4000, /* 122 */ 4000, /* 123 */ 4000, /* 124 */ NIET GEVONDEN, /* 125 */ 600, /* 126 */ 2100, /* 127 */ 400, /* 128 */ 1950, /* 129 */ 1400, /* 130 */ 1700, /* 131 */ 500, /* 132 */ 400, /* 133 */ 240, /* 134 */ 300, /* 135 */ 240, /* 136 */ 0, /* 137 */ 170, /* 138 */ 110, /* 139 */ 400, /* 140 */ 1000, /* 141 */ 1750, /* 142 */ 4000, /* 143 */ 8000, /* 144 */ 22500, /* 145 */ NIET GEVONDEN, /* 146 */ NIET GEVONDEN, /* 147 */ NIET GEVONDEN, /* 148 */ NIET GEVONDEN, /* 149 */ NIET GEVONDEN, /* 150 */ NIET GEVONDEN, /* 151 */ NIET GEVONDEN, /* 152 */ NIET GEVONDEN, /* 153 */ NIET GEVONDEN, /* 154 */ 890, /* 155 */ 1100, /* 156 */ 3570, /* 157 */ 350, /* 158 */ 1500, /* 159 */ NIET GEVONDEN, /* 160 */ NIET GEVONDEN, /* 161 */ NIET GEVONDEN, /* 162 */ NIET GEVONDEN, /* 163 */ NIET GEVONDEN, /* 164 */ NIET GEVONDEN, /* 165 */ NIET GEVONDEN, /* 166 */ NIET GEVONDEN, /* 167 */ NIET GEVONDEN, /* 168 */ NIET GEVONDEN, /* 169 */ NIET GEVONDEN, /* 170 */ NIET GEVONDEN, /* 171 */ NIET GEVONDEN, /* 172 */ NIET GEVONDEN, /* 173 */ NIET GEVONDEN, /* 174 */ NIET GEVONDEN, /* 175 */ NIET GEVONDEN, /* 176 */ NIET GEVONDEN, /* 177 */ NIET GEVONDEN, /* 178 */ NIET GEVONDEN, /* 179 */ 1000, /* 180 */ 1600, /* 181 */ 1400, /* 182 */ 1200, /* 183 */ 400, /* 184 */ 1200, /* 185 */ 490, /* 186 */ 390, /* 187 */ 310, /* 188 */ 330, /* 189 */ 490, /* 190 */ 420, /* 191 */ 490, /* 192 */ 140, /* 193 */ 190, /* 194 */ 420, /* 195 */ 190, /* 196 */ 190, /* 197 */ 190, /* 198 */ 800, /* 199 */ 800, /* 200 */ 850, /* 201 */ 1500, /* 202 */ 1000, /* 203 */ 1600, /* 204 */ 850, /* 205 */ 1100, /* 206 */ 900, /* 207 */ 1200, /* 208 */ 1100, /* 209 */ 1500, /* 210 */ 2000, /* 211 */ 900, /* 212 */ 1100, /* 213 */ 750, /* 214 */ 800, /* 215 */ 999, /* 216 */ 620, /* 217 */ 1100, /* 218 */ 2000, /* 219 */ 3000, /* 220 */ 800, /* 221 */ 1000, /* 222 */ 700, /* 223 */ 500, /* 224 */ 0, /* 225 */ 0, /* 226 */ 750, /* 227 */ 750, /* 228 */ 1700, /* 229 */ 0, /* 230 */ 800, /* 231 */ 800, /* 232 */ 900, /* 233 */ 11500, /* 234 */ 400, /* 235 */ 1500, /* 236 */ 780, /* 237 */ 450, /* 238 */ 0, /* 239 */ 0, /* 240 */ 1150, /* 241 */ 900, /* 242 */ 750, /* 243 */ 0, /* 244 */ 3500, /* 245 */ 600, /* 246 */ 1200, /* 247 */ 2200, /* 248 */ 2700, /* 249 */ 300, /* 250 */ 1000, /* 251 */ 1300, /* 252 */ NIET GEVONDEN, /* 253 */ 650, /* 254 */ 1700, /* 255 */ 400, /* 256 */ 500, /* 257 */ 250, /* 258 */ 1050, /* 259 */ 220, /* 260 */ 0, /* 261 */ 430, /* 262 */ 300, /* 263 */ 650, /* 264 */ 1550, /* 265 */ 1550, /* 266 */ 1550, /* 267 */ 2600, /* 268 */ 2700, /* 269 */ 1800, /* 270 */ 1125, /* 271 */ 1100, /* 272 */ 2100, /* 273 */ 3000, /* 274 */ 1650, /* 275 */ 2500, /* 276 */ 0, /* 277 */ 0, /* 278 */ 750, /* 279 */ 850, /* 280 */ 2700, /* 281 */ 3620, /* 282 */ 0, /* 283 */ 500, /* 284 */ 1400, /* 285 */ 340, /* 286 */ 350, /* 287 */ 1750, /* 288 */ 2150, /* 289 */ 3000, /* 290 */ 4200, /* 291 */ 1575, /* 292 */ 2450, /* 293 */ 550, /* 294 */ 450, /* 295 */ 900, /* 296 */ 1500, /* 297 */ 2200, /* 298 */ 900, /* 299 */ 1450, /* 300 */ 750, /* 301 */ 850, /* 302 */ 1650, /* 303 */ 2400, /* 304 */ 1450, /* 305 */ 2100, /* 306 */ 3250, /* 307 */ 11500, /* 308 */ 18750, /* 309 */ 750, /* 310 */ 650, /* 311 */ 4000, /* 312 */ 1000, /* 313 */ 2100, /* 314 */ 3250, /* 315 */ 1100, /* 316 */ 2000, /* 317 */ 1450, /* 318 */ 3100, /* 319 */ 4750, /* 320 */ 300, /* 321 */ 1000, /* 322 */ 750, /* 323 */ 900, /* 324 */ 1100, /* 325 */ 3650, /* 326 */ 7000, /* 327 */ 700, /* 328 */ 350, /* 329 */ 2250, /* 330 */ 1500, /* 331 */ 1500, /* 332 */ 2000, /* 333 */ 850, /* 334 */ 1750, /* 335 */ 2850, /* 336 */ 1000, /* 337 */ 1550, /* 338 */ 1150, /* 339 */ 2500, /* 340 */ 500, /* 341 */ 500, /* 342 */ 500, /* 343 */ 1375, /* 344 */ 2850, /* 345 */ 18500, /* 346 */ 17500, /* 347 */ 1750, /* 348 */ 3150, /* 349 */ 2350, /* 350 */ 1500, /* 351 */ 1400, /* 352 */ 3300, /* 353 */ 5150, /* 354 */ 3000, /* 355 */ 7200, /* 356 */ 22500, /* 357 */ 0, /* 358 */ 0, /* 359 */ 300, /* 360 */ 1150, /* 361 */ 2350, /* 362 */ 1450, /* 363 */ 3250, /* 364 */ 4800, /* 365 */ 550, /* 366 */ 400, /* 367 */ 1000, /* 368 */ 1150, /* 369 */ 1200, /* 370 */ NIET GEVONDEN, /* 371 */ NIET GEVONDEN, /* 372 */ NIET GEVONDEN, /* 373 */ NIET GEVONDEN, /* 374 */ NIET GEVONDEN, /* 375 */ 3000, /* 376 */ 5200, /* 377 */ 1950, /* 378 */ 4000, /* 379 */ 0, /* 380 */ 0, /* 381 */ 0, /* 382 */ 900, /* 383 */ 2150, /* 384 */ 3650, /* 385 */ 5100, /* 386 */ 0, /* 387 */ 400, /* 388 */ 900, /* 389 */ 800, /* 390 */ 1500, /* 391 */ 2600, /* 392 */ 4800, /* 393 */ 6800, /* 394 */ 9500, /* 395 */ 2600, /* 396 */ 1200, /* 397 */ 1750, /* 398 */ 1850, /* 399 */ 1850, /* 400 */ 2250, /* 401 */ 0, /* 402 */ 0, /* 403 */ 0, /* 404 */ 150, /* 405 */ 0, /* 406 */ 500, /* 407 */ 800, /* 408 */ 1500, /* 409 */ 2500, /* 410 */ 2650, /* 411 */ 4850, /* 412 */ 6700, /* 413 */ 800, /* 414 */ 1800, /* 415 */ 3000, /* 416 */ 1000, /* 417 */ 1150, /* 418 */ 1000, /* 419 */ 1200, /* 420 */ 2200, /* 421 */ 2200, /* 422 */ 4100, /* 423 */ 4500, /* 424 */ 850, /* 425 */ 1550, /* 426 */ 2500, /* 427 */ 4850, /* 428 */ 6850, /* 429 */ 0, /* 430 */ 950, /* 431 */ 1050, /* 432 */ 1200, /* 433 */ 3800, /* 434 */ 4000, /* 435 */ 900, /* 436 */ 1150, /* 437 */ 850, /* 438 */ 1100, /* 439 */ 950, /* 440 */ 1950, /* 441 */ 2300, /* 442 */ 750, /* 443 */ 1550, /* 444 */ 2500, /* 445 */ 2600, /* 446 */ 4900, /* 447 */ 0, /* 448 */ 0, /* 449 */ 0, /* 450 */ 400, /* 451 */ 350, /* 452 */ 300, /* 453 */ 320, /* 454 */ 300, /* 455 */ 800, /* 456 */ 1950, /* 457 */ 2750, /* 458 */ 600, /* 459 */ 1350, /* 460 */ 2950, /* 461 */ 1600, /* 462 */ 1600, /* 463 */ 550, /* 464 */ 950, /* 465 */ 1600, /* 466 */ 2750, /* 467 */ 4950, /* 468 */ 7000, /* 469 */ 700, /* 470 */ 1100, /* 471 */ 700, /* 472 */ 1100, /* 473 */ 5000, /* 474 */ 5250, /* 475 */ 0, /* 476 */ 300, /* 477 */ 170, /* 478 */ 170, /* 479 */ 850, /* 480 */ 1750, /* 481 */ 3000, /* 482 */ 1150, /* 483 */ 3600, /* 484 */ 4000, /* 485 */ 800, /* 486 */ 800, /* 487 */ 800, /* 488 */ 800, /* 489 */ 1650, /* 490 */ 1650, /* 491 */ 2000, /* 492 */ 1650, /* 493 */ 1400, /* 494 */ 1400, /* 495 */ 900, /* 496 */ 1200, /* 497 */ 550, /* 498 */ 450, /* 499 */ 1200, /* 500 */ 900, /* 501 */ 2000, /* 502 */ 2250, /* 503 */ 900, /* 504 */ 1600, /* 505 */ 2800, /* 506 */ 2950, /* 507 */ 5000, /* 508 */ 7200, /* 509 */ 600, /* 510 */ 1850, /* 511 */ 700, /* 512 */ 1900, /* 513 */ 1750, /* 514 */ 1850, /* 515 */ 3000, /* 516 */ 3100, /* 517 */ 3300, /* 518 */ 4750, /* 519 */ 0, /* 520 */ 0, /* 521 */ 0, /* 522 */ 0, /* 523 */ 0, /* 524 */ NIET GEVONDEN, /* 525 */ NIET GEVONDEN, /* 526 */ NIET GEVONDEN, /* 527 */ NIET GEVONDEN, /* 528 */ NIET GEVONDEN, /* 529 */ NIET GEVONDEN, /* 530 */ NIET GEVONDEN, /* 531 */ NIET GEVONDEN, /* 532 */ NIET GEVONDEN, /* 533 */ NIET GEVONDEN, /* 534 */ NIET GEVONDEN, /* 535 */ NIET GEVONDEN, /* 536 */ NIET GEVONDEN, /* 537 */ NIET GEVONDEN, /* 538 */ NIET GEVONDEN, /* 539 */ NIET GEVONDEN, /* 540 */ NIET GEVONDEN, /* 541 */ NIET GEVONDEN, /* 542 */ NIET GEVONDEN, /* 543 */ NIET GEVONDEN, /* 544 */ NIET GEVONDEN, /* 545 */ NIET GEVONDEN, /* 546 */ NIET GEVONDEN, /* 547 */ 4200, /* 548 */ 4200, /* 549 */ 850, /* 550 */ 1600, /* 551 */ 2200, /* 552 */ 500, /* 553 */ 3800, /* 554 */ 0, /* 555 */ 3200, /* 556 */ 6400, /* 557 */ 10714, /* 558 */ 200, /* 559 */ 400, /* 560 */ 400, /* 561 */ NIET GEVONDEN, /* 562 */ NIET GEVONDEN, /* 563 */ 2040, /* 564 */ 2140, /* 565 */ 1540, /* 566 */ 400, /* 567 */ 1200, /* 568 */ 2500, /* 569 */ 2000, /* 570 */ 0, /* 571 */ 0, /* 572 */ 370, /* 573 */ 300, /* 574 */ 500, /* 575 */ 510, /* 576 */ 1010, /* 577 */ NIET GEVONDEN, /* 578 */ NIET GEVONDEN, /* 579 */ NIET GEVONDEN, /* 580 */ NIET GEVONDEN, /* 581 */ NIET GEVONDEN, /* 582 */ NIET GEVONDEN, /* 583 */ NIET GEVONDEN, /* 584 */ NIET GEVONDEN, /* 585 */ NIET GEVONDEN, /* 586 */ NIET GEVONDEN, /* 587 */ NIET GEVONDEN, /* 588 */ 1980, /* 589 */ 8640, /* 590 */ 9450, /* 591 */ 11060, /* 592 */ 4000, /* 593 */ 6500, /* 594 */ 0, /* 595 */ 0, /* 596 */ 170, /* 597 */ 1360, /* 598 */ 500, /* 599 */ 500, /* 600 */ 500, /* 601 */ 510, /* 602 */ NIET GEVONDEN, /* 603 */ NIET GEVONDEN, /* 604 */ NIET GEVONDEN, /* 605 */ NIET GEVONDEN, /* 606 */ NIET GEVONDEN, /* 607 */ NIET GEVONDEN, /* 608 */ NIET GEVONDEN, /* 609 */ NIET GEVONDEN, /* 610 */ NIET GEVONDEN, /* 611 */ NIET GEVONDEN, /* 612 */ NIET GEVONDEN, /* 613 */ NIET GEVONDEN, /* 614 */ NIET GEVONDEN, /* 615 */ NIET GEVONDEN, /* 616 */ NIET GEVONDEN, /* 617 */ NIET GEVONDEN, /* 618 */ NIET GEVONDEN, /* 619 */ NIET GEVONDEN, /* 620 */ NIET GEVONDEN, /* 621 */ NIET GEVONDEN, /* 622 */ NIET GEVONDEN, /* 623 */ NIET GEVONDEN, /* 624 */ NIET GEVONDEN, /* 625 */ NIET GEVONDEN, /* 626 */ NIET GEVONDEN, /* 627 */ NIET GEVONDEN, /* 628 */ NIET GEVONDEN, /* 629 */ NIET GEVONDEN, /* 630 */ NIET GEVONDEN, /* 631 */ NIET GEVONDEN, /* 632 */ NIET GEVONDEN, /* 633 */ NIET GEVONDEN, /* 634 */ NIET GEVONDEN, /* 635 */ NIET GEVONDEN, /* 636 */ NIET GEVONDEN, /* 637 */ NIET GEVONDEN, /* 638 */ NIET GEVONDEN, /* 639 */ NIET GEVONDEN, /* 640 */ NIET GEVONDEN, /* 641 */ NIET GEVONDEN, /* 642 */ NIET GEVONDEN, /* 643 */ NIET GEVONDEN, /* 644 */ NIET GEVONDEN, /* 645 */ NIET GEVONDEN, /* 646 */ NIET GEVONDEN, /* 647 */ NIET GEVONDEN, /* 648 */ NIET GEVONDEN, /* 649 */ NIET GEVONDEN, /* 650 */ NIET GEVONDEN, /* 651 */ NIET GEVONDEN, /* 652 */ NIET GEVONDEN, /* 653 */ NIET GEVONDEN, /* 654 */ NIET GEVONDEN, /* 655 */ NIET GEVONDEN, /* 656 */ NIET GEVONDEN, /* 657 */ NIET GEVONDEN, /* 658 */ NIET GEVONDEN, /* 659 */ NIET GEVONDEN, /* 660 */ NIET GEVONDEN, /* 661 */ NIET GEVONDEN, /* 662 */ NIET GEVONDEN, /* 663 */ NIET GEVONDEN, /* 664 */ NIET GEVONDEN, /* 665 */ NIET GEVONDEN, /* 666 */ NIET GEVONDEN, /* 667 */ NIET GEVONDEN, /* 668 */ NIET GEVONDEN, /* 669 */ NIET GEVONDEN, /* 670 */ NIET GEVONDEN, /* 671 */ NIET GEVONDEN, /* 672 */ NIET GEVONDEN, /* 673 */ NIET GEVONDEN, /* 674 */ NIET GEVONDEN, /* 675 */ NIET GEVONDEN, /* 676 */ NIET GEVONDEN, /* 677 */ NIET GEVONDEN, /* 678 */ NIET GEVONDEN, /* 679 */ NIET GEVONDEN, /* 680 */ NIET GEVONDEN, /* 681 */ NIET GEVONDEN, /* 682 */ NIET GEVONDEN, /* 683 */ NIET GEVONDEN, /* 684 */ NIET GEVONDEN, /* 685 */ NIET GEVONDEN, /* 686 */ NIET GEVONDEN, /* 687 */ NIET GEVONDEN, /* 688 */ NIET GEVONDEN, /* 689 */ NIET GEVONDEN, /* 690 */ NIET GEVONDEN, /* 691 */ NIET GEVONDEN, /* 692 */ NIET GEVONDEN, /* 693 */ NIET GEVONDEN, /* 694 */ NIET GEVONDEN, /* 695 */ NIET GEVONDEN, /* 696 */ NIET GEVONDEN, /* 697 */ NIET GEVONDEN, /* 698 */ NIET GEVONDEN, /* 699 */ NIET GEVONDEN, /* 700 */ NIET GEVONDEN, /* 701 */ NIET GEVONDEN, /* 702 */ NIET GEVONDEN, /* 703 */ NIET GEVONDEN, /* 704 */ NIET GEVONDEN, /* 705 */ NIET GEVONDEN, /* 706 */ NIET GEVONDEN, /* 707 */ NIET GEVONDEN, /* 708 */ NIET GEVONDEN, /* 709 */ NIET GEVONDEN, /* 710 */ NIET GEVONDEN, /* 711 */ NIET GEVONDEN, /* 712 */ NIET GEVONDEN, /* 713 */ NIET GEVONDEN, /* 714 */ NIET GEVONDEN, /* 715 */ NIET GEVONDEN, /* 716 */ NIET GEVONDEN, /* 717 */ NIET GEVONDEN, /* 718 */ NIET GEVONDEN, /* 719 */ NIET GEVONDEN, /* 720 */ NIET GEVONDEN, /* 721 */ NIET GEVONDEN, /* 722 */ NIET GEVONDEN, /* 723 */ NIET GEVONDEN, /* 724 */ NIET GEVONDEN, /* 725 */ NIET GEVONDEN, /* 726 */ NIET GEVONDEN, /* 727 */ NIET GEVONDEN, /* 728 */ NIET GEVONDEN, /* 729 */ NIET GEVONDEN, /* 730 */ NIET GEVONDEN, /* 731 */ NIET GEVONDEN, /* 732 */ NIET GEVONDEN, /* 733 */ NIET GEVONDEN, /* 734 */ NIET GEVONDEN, /* 735 */ NIET GEVONDEN, /* 736 */ NIET GEVONDEN, /* 737 */ NIET GEVONDEN, /* 738 */ NIET GEVONDEN, /* 739 */ NIET GEVONDEN, /* 740 */ NIET GEVONDEN, /* 741 */ NIET GEVONDEN, /* 742 */ NIET GEVONDEN, /* 743 */ NIET GEVONDEN, /* 744 */ NIET GEVONDEN, /* 745 */ NIET GEVONDEN, /* 746 */ NIET GEVONDEN, /* 747 */ NIET GEVONDEN, /* 748 */ NIET GEVONDEN, /* 749 */ NIET GEVONDEN, /* 750 */ NIET GEVONDEN, /* 751 */ NIET GEVONDEN, /* 752 */ NIET GEVONDEN, /* 753 */ NIET GEVONDEN, /* 754 */ NIET GEVONDEN, /* 755 */ NIET GEVONDEN, /* 756 */ NIET GEVONDEN, /* 757 */ NIET GEVONDEN, /* 758 */ NIET GEVONDEN, /* 759 */ NIET GEVONDEN, /* 760 */ NIET GEVONDEN, /* 761 */ NIET GEVONDEN, /* 762 */ NIET GEVONDEN, /* 763 */ NIET GEVONDEN, /* 764 */ NIET GEVONDEN, /* 765 */ NIET GEVONDEN, /* 766 */ NIET GEVONDEN, /* 767 */ NIET GEVONDEN, /* 768 */ NIET GEVONDEN, /* 769 */ NIET GEVONDEN, /* 770 */ NIET GEVONDEN, /* 771 */ NIET GEVONDEN, /* 772 */ NIET GEVONDEN, /* 773 */ NIET GEVONDEN, /* 774 */ NIET GEVONDEN, /* 775 */ NIET GEVONDEN, /* 776 */ NIET GEVONDEN, /* 777 */ NIET GEVONDEN, /* 778 */ NIET GEVONDEN, /* 779 */ NIET GEVONDEN, /* 780 */ NIET GEVONDEN, /* 781 */ NIET GEVONDEN, /* 782 */ NIET GEVONDEN, /* 783 */ NIET GEVONDEN, /* 784 */ NIET GEVONDEN, /* 785 */ NIET GEVONDEN, /* 786 */ NIET GEVONDEN, /* 787 */ NIET GEVONDEN, /* 788 */ NIET GEVONDEN, /* 789 */ NIET GEVONDEN, /* 790 */ NIET GEVONDEN, /* 791 */ NIET GEVONDEN, /* 792 */ NIET GEVONDEN, /* 793 */ NIET GEVONDEN, /* 794 */ NIET GEVONDEN, /* 795 */ NIET GEVONDEN, /* 796 */ NIET GEVONDEN, /* 797 */ NIET GEVONDEN, /* 798 */ NIET GEVONDEN, /* 799 */ NIET GEVONDEN, /* 800 */ NIET GEVONDEN, /* 801 */ NIET GEVONDEN, /* 802 */ NIET GEVONDEN, /* 803 */ NIET GEVONDEN, /* 804 */ NIET GEVONDEN, /* 805 */ NIET GEVONDEN, /* 806 */ NIET GEVONDEN, /* 807 */ NIET GEVONDEN, /* 808 */ NIET GEVONDEN, /* 809 */ NIET GEVONDEN, /* 810 */ NIET GEVONDEN, /* 811 */ NIET GEVONDEN, /* 812 */ NIET GEVONDEN, /* 813 */ NIET GEVONDEN, /* 814 */ NIET GEVONDEN, /* 815 */ NIET GEVONDEN, /* 816 */ NIET GEVONDEN, /* 817 */ NIET GEVONDEN, /* 818 */ NIET GEVONDEN, /* 819 */ NIET GEVONDEN, /* 820 */ NIET GEVONDEN, /* 821 */ NIET GEVONDEN, /* 822 */ NIET GEVONDEN, /* 823 */ NIET GEVONDEN, /* 824 */ NIET GEVONDEN, /* 825 */ NIET GEVONDEN, /* 826 */ NIET GEVONDEN, /* 827 */ NIET GEVONDEN, /* 828 */ NIET GEVONDEN, /* 829 */ NIET GEVONDEN, /* 830 */ NIET GEVONDEN, /* 831 */ NIET GEVONDEN, /* 832 */ NIET GEVONDEN, /* 833 */ NIET GEVONDEN, /* 834 */ NIET GEVONDEN, /* 835 */ NIET GEVONDEN, /* 836 */ NIET GEVONDEN, /* 837 */ NIET GEVONDEN, /* 838 */ NIET GEVONDEN, /* 839 */ NIET GEVONDEN, /* 840 */ NIET GEVONDEN, /* 841 */ NIET GEVONDEN, /* 842 */ NIET GEVONDEN, /* 843 */ NIET GEVONDEN, /* 844 */ NIET GEVONDEN, /* 845 */ NIET GEVONDEN, /* 846 */ NIET GEVONDEN, /* 847 */ NIET GEVONDEN, /* 848 */ NIET GEVONDEN, /* 849 */ NIET GEVONDEN, /* 850 */ NIET GEVONDEN, /* 851 */ NIET GEVONDEN, /* 852 */ NIET GEVONDEN, /* 853 */ NIET GEVONDEN, /* 854 */ NIET GEVONDEN, /* 855 */ NIET GEVONDEN, /* 856 */ NIET GEVONDEN, /* 857 */ NIET GEVONDEN, /* 858 */ NIET GEVONDEN, /* 859 */ NIET GEVONDEN, /* 860 */ NIET GEVONDEN, /* 861 */ NIET GEVONDEN, /* 862 */ NIET GEVONDEN, /* 863 */ NIET GEVONDEN, /* 864 */ NIET GEVONDEN, /* 865 */ NIET GEVONDEN, /* 866 */ NIET GEVONDEN, /* 867 */ NIET GEVONDEN, /* 868 */ NIET GEVONDEN, /* 869 */ NIET GEVONDEN, /* 870 */ NIET GEVONDEN, /* 871 */ NIET GEVONDEN, /* 872 */ NIET GEVONDEN, /* 873 */ NIET GEVONDEN, /* 874 */ NIET GEVONDEN, /* 875 */ NIET GEVONDEN, /* 876 */ NIET GEVONDEN, /* 877 */ NIET GEVONDEN, /* 878 */ NIET GEVONDEN, /* 879 */ NIET GEVONDEN, /* 880 */ NIET GEVONDEN, /* 881 */ NIET GEVONDEN, /* 882 */ NIET GEVONDEN, /* 883 */ NIET GEVONDEN, /* 884 */ NIET GEVONDEN, /* 885 */ NIET GEVONDEN, /* 886 */ NIET GEVONDEN, /* 887 */ NIET GEVONDEN, /* 888 */ NIET GEVONDEN, /* 889 */ NIET GEVONDEN, /* 890 */ NIET GEVONDEN, /* 891 */ NIET GEVONDEN, /* 892 */ NIET GEVONDEN, /* 893 */ NIET GEVONDEN, /* 894 */ NIET GEVONDEN, /* 895 */ NIET GEVONDEN, /* 896 */ NIET GEVONDEN, /* 897 */ NIET GEVONDEN, /* 898 */ NIET GEVONDEN, /* 899 */ NIET GEVONDEN, /* 900 */ NIET GEVONDEN, /* 901 */ NIET GEVONDEN, /* 902 */ NIET GEVONDEN, /* 903 */ NIET GEVONDEN, /* 904 */ NIET GEVONDEN, /* 905 */ NIET GEVONDEN, /* 906 */ NIET GEVONDEN, /* 907 */ NIET GEVONDEN, /* 908 */ NIET GEVONDEN, /* 909 */ NIET GEVONDEN, /* 910 */ NIET GEVONDEN, /* 911 */ NIET GEVONDEN, /* 912 */ NIET GEVONDEN, /* 913 */ NIET GEVONDEN, /* 914 */ NIET GEVONDEN, /* 915 */ NIET GEVONDEN, /* 916 */ NIET GEVONDEN, /* 917 */ NIET GEVONDEN, /* 918 */
                  ];

    // initial call of adding info
    initial_setup();

    // extend missionMarkerAdd -----------------------------------------------------------------------
    var original_func = missionMarkerAdd;

    // this function is always called, when a new mission is added
   missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        update(e);
    }

    // this function shows the credits information at initial loading of the page
    function update(e)
    {
        var Missions = $('.missionSideBarEntry');
        var added = false;

        for (var i = 0; i < Missions.length; i++)
        {
            var childs = Missions[i].firstElementChild.firstElementChild.children;
            var existing = false;

            if (e.id != Missions[i].getAttribute('mission_id')) continue;

            // check if html element is actually existing
            for (var ic = 0; ic < childs.length; ic++)
            {
                if(childs[ic].className == 'missionCredits')
                {
                   existing = true;
                   break;
                }
            }

            // if it's existing but mtid is filled, we re create the element
            if(existing == true && e.mtid != undefined)
            {
                for(var ic2 = 0; ic2 < childs.length; ic2++)
                {
                    if(childs[ic2].className != 'missionCredits') continue;

                    var child = childs[ic2];
                    Missions[i].firstElementChild.firstElementChild.removeChild(child);
                    if (get_credits_for_type(e.mtid) == 0) child.innerHTML = 'Alleen Ambulance'
                    else child.innerHTML = 'Gem. ' + get_credits_for_type(e.mtid) + ' Credits';
                    Missions[i].firstElementChild.firstElementChild.appendChild(child);
                }
            }
            else //create element
            {
                var mission_type_id = Missions[i].getAttribute('mission_type_id');

                if(mission_type_id == 'null') continue;

                var div_elem = document.createElement('div');
                var html_str = '';

                if (get_credits_for_type(Missions[i].getAttribute('mission_type_id')) == 0) html_str = 'Alleen Ambulance';
                else html_str = 'Gem. ' + get_credits_for_type(Missions[i].getAttribute('mission_type_id')) + ' Credits';

                div_elem.innerHTML = html_str;
                div_elem.setAttribute("class", "missionCredits");
                div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));
                Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
            }
        }
    }

    function initial_setup()
    {
        // clear all
        $('.missionCredits').remove();

        // get complete mission list
        var Missions = $('.missionSideBarEntry');

        // add info to every mission
        for (var i = 0; i < Missions.length; i++)
        {
            var mission_type_id = Missions[i].getAttribute('mission_type_id');

            if (mission_type_id == 'null') continue;

            // init credits
            var credits = 0;

            // init html string
            var html_str = '';

            // get credits for mission type
            credits = get_credits_for_type(Missions[i].getAttribute('mission_type_id'));

            // create div element
            if (credits == 0) html_str = 'Alleen Ambulance';
            else html_str = 'Gem. ' + credits + ' Credits';

            var div_elem = document.createElement('div');
            div_elem.innerHTML = html_str;
            div_elem.setAttribute("class", "missionCredits");
            div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));

            // add div element
            Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
        }
    }

    // returns the credits for a specific mission type
    function get_credits_for_type(type)
    {
        return aCredits[type];
    }

})();

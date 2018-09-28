Search.setIndex({docnames:["index","interpret","overview/extending","overview/faq","overview/installation","overview/overview","overview/tutorials","predict","predict.predict_handlers","samplers","samplers.file_samplers","selene","sequences","targets","tutorials/index","utils"],envversion:53,filenames:["index.rst","interpret.rst","overview/extending.md","overview/faq.md","overview/installation.md","overview/overview.md","overview/tutorials.md","predict.rst","predict.predict_handlers.rst","samplers.rst","samplers.file_samplers.rst","selene.rst","sequences.rst","targets.rst","tutorials/index.rst","utils.rst"],objects:{"":{selene_sdk:[11,0,0,"-"]},"selene_sdk.EvaluateModel":{evaluate:[11,2,1,""]},"selene_sdk.TrainModel":{evaluate:[11,2,1,""],train:[11,2,1,""],train_and_validate:[11,2,1,""],validate:[11,2,1,""]},"selene_sdk.interpret":{ISMResult:[1,1,1,""],heatmap:[1,5,1,""],load_variant_abs_diff_scores:[1,5,1,""],ordered_variants_and_indices:[1,5,1,""],rescale_score_matrix:[1,5,1,""],sequence_logo:[1,5,1,""],sort_standard_chrs:[1,5,1,""],variant_diffs_scatter_plot:[1,5,1,""]},"selene_sdk.interpret.ISMResult":{from_file:[1,3,1,""],get_score_matrix_for:[1,2,1,""],reference_sequence:[1,4,1,""],sequence_type:[1,4,1,""]},"selene_sdk.predict":{AnalyzeSequences:[7,1,1,""],predict_handlers:[8,0,0,"-"]},"selene_sdk.predict.AnalyzeSequences":{get_predictions_for_fasta_file:[7,2,1,""],in_silico_mutagenesis:[7,2,1,""],in_silico_mutagenesis_from_file:[7,2,1,""],in_silico_mutagenesis_predict:[7,2,1,""],predict:[7,2,1,""],variant_effect_prediction:[7,2,1,""]},"selene_sdk.predict.predict_handlers":{DiffScoreHandler:[8,1,1,""],LogitScoreHandler:[8,1,1,""],PredictionsHandler:[8,1,1,""],WritePredictionsHandler:[8,1,1,""],WriteRefAltHandler:[8,1,1,""],write_to_file:[8,5,1,""]},"selene_sdk.predict.predict_handlers.DiffScoreHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.LogitScoreHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.PredictionsHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.WritePredictionsHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.predict.predict_handlers.WriteRefAltHandler":{handle_NA:[8,2,1,""],handle_batch_predictions:[8,2,1,""],write_to_file:[8,2,1,""]},"selene_sdk.samplers":{IntervalsSampler:[9,1,1,""],MultiFileSampler:[9,1,1,""],OnlineSampler:[9,1,1,""],RandomPositionsSampler:[9,1,1,""],Sampler:[9,1,1,""],file_samplers:[10,0,0,"-"]},"selene_sdk.samplers.IntervalsSampler":{sample:[9,2,1,""]},"selene_sdk.samplers.MultiFileSampler":{get_data_and_targets:[9,2,1,""],get_feature_from_index:[9,2,1,""],get_test_set:[9,2,1,""],get_validation_set:[9,2,1,""],sample:[9,2,1,""],save_dataset_to_file:[9,2,1,""],set_mode:[9,2,1,""]},"selene_sdk.samplers.OnlineSampler":{STRAND_SIDES:[9,4,1,""],get_data_and_targets:[9,2,1,""],get_dataset_in_batches:[9,2,1,""],get_feature_from_index:[9,2,1,""],get_sequence_from_encoding:[9,2,1,""],get_test_set:[9,2,1,""],get_validation_set:[9,2,1,""],save_dataset_to_file:[9,2,1,""]},"selene_sdk.samplers.RandomPositionsSampler":{sample:[9,2,1,""]},"selene_sdk.samplers.Sampler":{BASE_MODES:[9,4,1,""],get_data_and_targets:[9,2,1,""],get_feature_from_index:[9,2,1,""],get_test_set:[9,2,1,""],get_validation_set:[9,2,1,""],sample:[9,2,1,""],save_dataset_to_file:[9,2,1,""],set_mode:[9,2,1,""]},"selene_sdk.samplers.file_samplers":{BedFileSampler:[10,1,1,""],MatFileSampler:[10,1,1,""]},"selene_sdk.samplers.file_samplers.BedFileSampler":{get_data:[10,2,1,""],get_data_and_targets:[10,2,1,""],sample:[10,2,1,""]},"selene_sdk.samplers.file_samplers.MatFileSampler":{get_data:[10,2,1,""],get_data_and_targets:[10,2,1,""],sample:[10,2,1,""]},"selene_sdk.sequences":{Genome:[12,1,1,""],Proteome:[12,1,1,""],Sequence:[12,1,1,""],encoding_to_sequence:[12,5,1,""],get_reverse_encoding:[12,5,1,""],sequence_to_encoding:[12,5,1,""]},"selene_sdk.sequences.Genome":{BASES_ARR:[12,4,1,""],BASE_TO_INDEX:[12,4,1,""],COMPLEMENTARY_BASE_DICT:[12,4,1,""],INDEX_TO_BASE:[12,4,1,""],UNK_BASE:[12,4,1,""],coords_in_bounds:[12,2,1,""],encoding_to_sequence:[12,6,1,""],get_chr_lens:[12,2,1,""],get_chrs:[12,2,1,""],get_encoding_from_coords:[12,2,1,""],get_sequence_from_coords:[12,2,1,""],sequence_to_encoding:[12,6,1,""]},"selene_sdk.sequences.Proteome":{BASES_ARR:[12,4,1,""],BASE_TO_INDEX:[12,4,1,""],INDEX_TO_BASE:[12,4,1,""],UNK_BASE:[12,4,1,""],coords_in_bounds:[12,2,1,""],encoding_to_sequence:[12,6,1,""],get_encoding_from_coords:[12,2,1,""],get_prot_lens:[12,2,1,""],get_prots:[12,2,1,""],get_sequence_from_coords:[12,2,1,""],sequence_to_encoding:[12,6,1,""]},"selene_sdk.sequences.Sequence":{BASES_ARR:[12,4,1,""],BASE_TO_INDEX:[12,4,1,""],INDEX_TO_BASE:[12,4,1,""],UNK_BASE:[12,4,1,""],coords_in_bounds:[12,2,1,""],encoding_to_sequence:[12,6,1,""],get_encoding_from_coords:[12,2,1,""],get_sequence_from_coords:[12,2,1,""],sequence_to_encoding:[12,6,1,""]},"selene_sdk.targets":{GenomicFeatures:[13,1,1,""],Target:[13,1,1,""]},"selene_sdk.targets.GenomicFeatures":{get_feature_data:[13,2,1,""],is_positive:[13,2,1,""]},"selene_sdk.targets.Target":{get_feature_data:[13,2,1,""]},"selene_sdk.utils":{NonStrandSpecific:[15,1,1,""],PerformanceMetrics:[15,1,1,""],execute:[15,5,1,""],get_indices_and_probabilities:[15,5,1,""],initialize_logger:[15,5,1,""],initialize_model:[15,5,1,""],instantiate:[15,5,1,""],load_features_list:[15,5,1,""],load_model_from_state_dict:[15,5,1,""],load_path:[15,5,1,""],parse_configs_and_run:[15,5,1,""],visualize_precision_recall_curves:[15,5,1,""],visualize_roc_curves:[15,5,1,""]},"selene_sdk.utils.PerformanceMetrics":{add_metric:[15,2,1,""],remove_metric:[15,2,1,""],update:[15,2,1,""],visualize:[15,2,1,""],write_feature_scores_to_file:[15,2,1,""]},selene_sdk:{EvaluateModel:[11,1,1,""],TrainModel:[11,1,1,""],interpret:[1,0,0,"-"],predict:[7,0,0,"-"],samplers:[9,0,0,"-"],sequences:[12,0,0,"-"],targets:[13,0,0,"-"],utils:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:attribute","5":"py:function","6":"py:classmethod"},terms:{"abstract":[8,12,13],"boolean":12,"case":5,"catch":[5,13],"char":12,"class":[1,2,5,7,8,9,10,11,12,13,15],"default":[1,7,8,9,10,11,12,13,15],"float":[1,9,11,13,15],"function":[0,1,2,7,9,11,13,15],"int":[1,7,9,10,11,12,13,15],"new":[1,2,5,9],"return":[1,7,8,9,10,11,12,13,15],"static":1,"true":[1,7,8,9,10,11,12,13,15],"try":15,"while":5,Axes:1,For:[1,3,5,8,9,12,13],NOT:7,One:[12,13],POS:7,That:7,The:[0,1,2,4,6,7,8,9,10,11,12,13,15],There:5,These:[5,9,13],Used:[8,9],Will:[7,15],_in:14,_io:8,_loss:[11,15],_preprocess:15,_proxi:15,_selene_:15,abl:[5,8],about:2,abov:[1,13],abs_diff:7,absdiffscorehandl:7,absenc:10,absent:13,absolut:[1,5,7],accept:[13,15],access:[12,13],accord:5,account:[10,15],accumul:8,acid:[5,12],across:[1,5,8,15],activ:4,actual:[1,15],add:15,add_metr:15,added:2,addit:[9,13,15],address:3,adher:5,aforement:5,after:5,again:9,aim:9,all:[1,5,7,8,9,10,11,12,13,15],allevi:9,allow:[1,5,9],alpha:1,alphabet:[1,5,7,9,10,12],alreadi:[4,7,10,15],also:[4,5,9,11,12],alt:[1,7,8],alt_writ:8,altern:[1,8],amino:[5,12],analysi:7,analyz:[7,14,15],analyzesequ:5,ani:[1,9,13,15],annot:[1,9,13],appear:[1,15],appli:[1,5,7,13],applic:7,appropri:15,architectur:[7,10,15],area:[5,12],arg:[8,12,13,15],argument:[1,11,15],around:[5,12],arrai:[1,9,12,13],arraylik:8,assign:[12,13],associ:[1,15],assum:[9,10,13,15],attach:8,auc:[5,11],aupr:11,auprc:5,auto_open:1,automat:[1,5,7,9,15],avail:[11,15],averag:[11,15],average_precis:15,axes:1,axi:1,bar:1,base:[0,1,2,5,7,8,9,10,11,12,13,15],base_mod:9,base_pr:7,base_predict:8,base_sc:1,base_to_index:12,baselin:8,baseline_predict:8,bases_arr:12,batch:[7,8,9,10,11],batch_id:8,batch_predict:8,batch_sequ:7,batch_siz:[7,9,10,11],becaus:[4,5,8,9],bed:[5,9,10,13],bedfilesampl:5,been:[7,9,13,15],befor:[4,9,10],begin:15,behavior:12,being:[2,13],below:1,between:[1,7,8,9],bgzip:13,bin:9,bin_radiu:9,binari:13,bind:[1,15],bioconda:4,biolog:[5,12],blacklist:12,blacklist_region:12,bool:[1,7,8,9,10,11,12,13,15],both:[5,9,15],bottom:[1,15],bound:12,breakdown:5,briefli:5,browser:1,build:4,build_ext:4,calcul:[8,15],call:[5,9,12,15],can:[1,4,5,8,9,11,12,15],cannot:[7,15],carri:15,cbar:1,cbar_kw:1,center:9,center_bin_to_predict:9,certain:1,chang:[1,15],charact:[1,9,12],characterist:5,check:[10,12,14],checkpoint:11,checkpoint_resum:11,choic:12,chr1:12,chr6:9,chr7:9,chr8:9,chr9:9,chr:12,chrom:[1,7,12,13],chromosom:[1,5,12],chrx:9,chry:9,clarifi:13,classmethod:12,cli:5,clone:4,close:[8,15],close_filehandl:9,closest:1,clutter:5,cmap:1,code:[1,5],collect:[7,8,12,15],color:1,color_palett:1,color_schem:1,colorbar:1,colorblind:15,column:[1,7,8,9,10,12,13],com:4,come:3,comma:1,command:[4,5],commit:4,complement:15,complementari:12,complementary_base_dict:12,complet:5,compos:[5,15],comprehens:14,compress:[9,13],comput:[1,5,7,8,12,15],concept:5,concern:3,conda:4,config_exampl:3,configur:5,confin:15,consid:13,consist:9,construct:[7,9],constructor:[9,11,15],contain:[1,4,7,8,9,10,12,13,15],contribut:[2,5],control:4,conveni:15,convert:[5,12],coordin:[1,5,9,10,12,13],coords_in_bound:12,core:5,correct:[9,12],correspond:[1,5,7,8,9,10,12,13,15],cpu:[4,11],cpu_n_thread:11,creat:[1,7,9,10,12,15],create_subdirectori:15,criterion:[11,13,15],csv:1,cuda:[4,7,11,15],current:[5,7,9,11,12,15],curv:[5,15],cython:4,dag:15,data:[0,1,5,7,8,9,10,11,13],data_across_featur:8,data_fram:1,data_parallel:11,data_sampl:11,datafram:1,dataparallel:15,dataset:[5,9,10,13],date:15,debug:15,decod:[9,12],deep:0,defin:[5,9,13],delimit:8,depend:4,deriv:8,describ:5,descript:7,design:[5,15],desir:15,detail:9,detect:9,determin:[10,13,15],develop:[5,9],dict:[1,11,12,13,15],dictionari:[11,12,13,15],diff:[1,7,8],differ:[1,5,7,8,9,13,15],dimens:8,dir:15,directli:[4,6,10,12],directori:[7,9,11,12,13,15],discuss:5,disk:[9,15],displai:1,distinct:[9,11,13,15],distinguish:8,divers:5,divid:[9,10],dna:[5,12],docopt:4,document:[2,8,9],doe:[1,5,7,9,12,15],done:9,dot:15,doubl:7,download:4,dpi:15,draw:[1,5,9,10,15],drawn:[5,9],dtype:[1,12],dure:[5,8,9,11],each:[1,5,7,8,9,10,11,12,13,15],eas:5,effect:[1,5,7,8,14],either:[4,5,8],elabor:8,element:[1,7,8,9,10,15],empti:9,enabl:[4,11],encod:[9,12,13],end:[5,7,8,10,12,13,15],enforc:9,ensur:[1,12],enter:1,entri:[1,8],environ:[4,15],equal:[1,13],error:[12,13],essenti:12,etc:1,evalu:[11,15],evaluatemodel:5,evalut:5,event:8,everi:1,exactli:9,exampl:[1,5,6,9,10,11,12,13,15],except:[1,13],exist:[7,9,12,13,15],exit:15,expand:10,expect:[7,9,12,15],experi:1,exponenti:7,extend:0,extens:[1,5],extra:1,extract:[1,12],extrem:9,faa:[12,13],fai:12,fall:9,fals:[1,7,8,9,10,11,12,13,15],fasta:[5,7,12],featur:[1,5,7,8,9,10,11,13,15],feature_index_dict:13,feature_threshold:[9,13],fetch:[9,10],fig_titl:15,figur:[1,5,6,15],file:[1,4,5,7,8,9,10,11,12,13,15],file_sampl:[0,9],filepath:10,filesampl:[5,9,10],filter_featur:1,finish:8,first:[1,4,9,12,13],five:13,flatironinstitut:2,flexibl:5,float32:12,float64:1,fly:5,focu:1,follow:[4,5,7,13,15],font:1,font_manag:1,font_properti:1,fontproperti:1,foo:15,form:9,formal:5,format:[5,15],forward:1,found:[1,10,13,15],fraction:9,frame:1,frequenc:[5,11],from:[1,5,7,8,9,10,11,12,13,15],from_fil:1,fulfil:5,full:10,functionlab:4,functiontyp:[1,13,15],further:[5,9,10,13],futur:[1,5,9],gap:1,gencod:1,gene:1,gener:[1,5,8,9,11,15],genom:[1,5,7,8,9,11,13],genomicfeatur:[5,9],get:[1,7,9,12,14],get_chr:12,get_chr_len:12,get_data:10,get_data_and_target:[9,10],get_dataset_in_batch:9,get_encoding_from_coord:12,get_feature_data:13,get_feature_from_index:[9,15],get_feature_from_index_fn:15,get_predictions_for_fasta_fil:7,get_prot:12,get_prot_len:12,get_score_matrix_for:1,get_sequence_from_coord:12,get_sequence_from_encod:9,get_test_set:9,get_validation_set:9,git:4,github:[0,4,5,6],given:[1,5,7,9,10,12,15],gpu:[4,11],graph:15,graph_obj:1,greater:13,group:10,guarante:1,guid:14,handl:[7,8,9,15],handle_batch_predict:8,handle_na:8,handler:[8,15],hard:13,has:[7,9,13,15],have:[1,4,5,7,8,9,12,13,14,15],header:7,heatmap:5,heavili:5,height:1,held:9,help:[1,6,8],helper:15,here:[0,15],hex:1,hg19:[1,7,12],hg38:[1,7,12],hg_reference_vers:1,hide:1,hierarchi:15,highli:5,histori:15,hold:[1,9],holdout:9,hope:5,horizont:1,hot:[9,12,13],hover:1,how:15,html:1,http:4,ident:1,identifi:[5,8],ignor:13,implement:[5,9],in_silico_mutagenesi:7,in_silico_mutagenesis_from_fil:7,in_silico_mutagenesis_predict:7,inch:15,includ:[1,5,9,10,11,15],incorpor:5,increas:7,index:[0,5,7,9,12,13,15],index_feature_dict:13,index_to_bas:12,indic:[1,5,10,12,13,15],individu:[5,9,15],info_col:8,inform:[1,2,8,9,12,15],initi:[5,9,15],inplac:4,input:[1,7,8,9,12,13,15],input_featur:15,input_path:[1,7,12,13,15],instal:[0,14],instanc:[5,12,13],instead:[5,15],integ:12,intend:5,interchang:13,interest:[2,15],interfac:5,interpret:[0,5],interv:[1,5,9,10,11,15],interval_length:[9,15],intervals_path:9,intervalssampl:[5,11],invalid:12,is_posit:13,ism:7,issu:[2,5],item:8,iter:11,its:[5,8,9,10,12,15],just:15,kchen:2,kei:[10,11,12,13,15],keyword:[1,11,15],kind:5,kit:5,known:[5,11],kwarg:[1,8,12,13,15],label:[1,5,9,10,13],labels_sort_fn:1,larg:9,largest:1,last:[10,12,13],lastli:13,latest:4,learn:[0,15],least:[9,13],leav:7,left:1,len_chr:12,len_prot:12,length:[1,7,8,9,10,12,13,15],less:[4,15],level:[0,1,5,8,15],leverag:5,librari:0,like:[4,9,15],line:[1,4,9,10,15],linux:4,list:[1,7,8,9,10,11,12,13,15],liter:15,load:[1,5,9,10,11,15],local:4,locat:[0,12],log:[5,8,9,11,15],logger:[5,15],logging_verbos:11,logit:[5,7,8],logo:[1,5],look:[10,15],loss:[5,11,15],loss_criterion:11,machin:4,made:[1,5,7],mai:[1,2,5,8,9,12],mail:2,main:[2,5,11],make:[1,4,7,8],mani:1,manipul:1,manner:1,map:[1,9,12,13,15],mask:1,mat:[5,9,10],match:[1,7,9,15],matfilesampl:[5,11],math:7,matplotlib:[1,15],matrix:[1,5,8,9,10,11],max:[1,15],max_effect:1,max_step:11,maximum:11,mean:[1,15],measur:[5,11,12],meet:13,member:[5,12],memori:9,messag:15,method:[1,5,7,8,9,10,11,13,15],metric:[5,11,15],metric_fn:15,might:15,mini:[7,8,9,10,11],minim:[5,11],minimum:[13,15],minor:15,miss:15,mode:[9,15],model:[1,7,8,9,10,11,14,15],model_config:15,modul:[0,1,2,5,7,8,9,10,11,12,13,15],more:[2,7,8,9,12,15],most:[3,6,15],motif:1,move:1,multifilesampl:5,multipl:[1,11],must:[1,5,7,8,9,10,13,15],mutagenesi:[1,5,7,14],mutat:[1,7,14],mutate_n_bas:7,mutations_list:7,n_featur:[10,13],n_sampl:[9,10],n_test_sampl:11,n_validation_sampl:11,name:[1,5,7,8,9,11,12,13,15],namespac:5,ndarrai:[1,7,9,10,12,13,15],need:[5,7,10,11,15],neg:9,nest:15,never:12,non:[1,9,13,15],none:[1,7,9,10,11,12,13,15],nonfeature_column:8,normal:12,note:[5,7,8,9,10,12,13,15],now:[3,11,13,15],nth_percentil:1,nth_step_report_stat:11,nth_step_save_checkpoint:11,nucleotid:[5,12],number:[1,5,7,8,9,10,11,13,15],numer:[5,9,10,12],numpi:[1,4,7,9,10,12,13,15],obj:15,object:[1,7,8,9,11,12,13],obtain:15,occur:[1,8,9,12,15],odd:8,onc:15,one:[1,7,8,9,12,13,15],ones:[1,5],onli:[1,5,7,9,10,12,15],onlin:5,online_sampl:9,onlinesampl:[2,5],open:[1,13],oper:[5,7,9],ops:15,opt:1,optim:[7,11,15],optim_class:15,optim_kwarg:15,optimizer_class:11,optimizer_kwarg:11,option:[1,7,8,9,10,11,12,15],order:[1,7,8,9,10,13,15],ordereddict:15,org:2,organ:[1,12],origin:1,other:[1,5,9,15],otherwis:[4,12,13,15],our:[5,8],out:[1,6,9,14,15],out_filenam:8,output:[1,7,8,9,11,12,15],output_dir:[7,9,11,15],output_handl:8,output_path:[1,8,15],output_path_prefix:7,outsid:[9,12],over:[1,4,11],overlap:13,overrid:15,overview:0,own:[1,5,12,15],packag:[0,5,15],page:0,pair:[9,10],palett:1,panda:1,parallel:7,paramet:[1,5,7,8,9,10,11,12,13,15],pariti:9,pars:[5,9,15],part:12,particular:[5,7],partit:[5,9,11],pass:[1,7,9,11,12,15],past:[12,13],path:[1,7,8,9,10,11,12,13,15],peak:13,per:15,percentag:[5,9],perform:[1,5,7,9,11,15],plan:[4,5],pleas:[2,3,4,5,6,7],plot:[1,5],plotli:1,point:1,pos:1,posit:[1,5,7,9,11,12,13,15],position_sc:1,possibl:[11,12],power:11,pre:9,precis:[5,15],predict:[0,1,9,11,13,14,15],predictionshandl:7,prefer:1,prefix:7,prepend:8,presenc:10,present:[5,7,13],prevent:5,previou:15,previous:15,probabl:[1,8,9,15],problem:9,proce:15,process:[5,11],produc:[1,5,15],program:5,proper:5,properti:1,proport:[9,13],proportion:15,prot:12,protein:[1,12,13],proteom:5,provid:[1,4,5,8,9,10,12,15],proxi:15,purpos:5,pyfaidx:12,pylearn2:15,pyplot:[1,15],python:[4,5,15],pytorch:[0,4,15],queri:[5,9,12,13],quickli:12,quickstart:14,radiu:9,rais:[1,9,12,15],random:[5,9,10,15],random_se:[10,15],randomli:[5,9],randompositionssampl:5,randomsampl:11,rate:15,raw:5,reach:10,read:[5,11,13,15],readm:6,recal:[5,15],receiv:5,recommend:[4,7],reconcil:15,record:8,recurs:15,redund:13,ref:[1,7,8],ref_writ:8,refer:[1,2,3,5,8,9,10],reference_mask:1,reference_sequ:[1,7,9,10],region:[5,9,12,13],rel:1,releas:12,reli:5,rememb:1,remov:9,remove_metr:15,render:[1,6],replac:7,report:[7,11],report_gt_feature_n_posit:[11,15],report_stats_every_n_step:11,repositori:[0,3,4,6],repres:[5,12],represent:[5,9,10,12],reproduc:[9,15],request:[2,5],requir:[4,5,15],resolut:15,respect:5,result:[1,5,7,8,13,15],retriev:[5,9,10,11,12,13],reus:5,revers:[12,15],right:13,rna:5,roc:[11,15],roc_auc:15,row:[1,8,9,12],row_id:8,run:[4,9],runtim:7,said:[5,12],same:[7,8,9,10,11,12,13,15],sampl:[8,9,10,11,12,13,15],sample_from_interv:9,sample_neg:9,sampler:[0,2,11],save:[5,7,8,9,11,15],save_checkpoint_every_n_step:11,save_data:7,save_dataset:9,save_dataset_to_fil:[5,9],scale:1,scatter:1,score:[1,5,7,8,15],score_matrix:1,script:4,sdk:[0,4],seaborn:[1,15],search:0,second:1,section:5,see:[5,9,12],seed:[9,10,15],select:9,selen:[1,4,5,11,14],selene_cli:4,selene_sdk:[0,2,5,8],self:[12,13],semicolon:10,send:2,separ:[1,8,9,10,15],sequenc:[0,1,2,7,8,9,10,11,13,15],sequence_kei:10,sequence_length:[7,9,10],sequence_typ:1,sequences_and_target:[9,10],set:[4,5,7,8,9,10,11,12,15],set_mod:9,setup:4,sever:5,shape:[1,7,8,9,10],should:[1,3,5,7,8,9,10,11,12,13,14,15],show:1,shown:13,shuffl:10,signifi:12,silico:[1,5,7],silico_:14,simpli:4,sinc:5,singl:[5,9,10,13],six:5,size:[1,7,8,9,10,11,12],skip_threshold:15,smaller:9,softwar:5,some:[1,4,5,8,13],soon:[2,3],sort:[1,13],sourc:[1,7,8,9,10,11,12,13,15],space:7,specif:[5,13,15],specifi:[1,5,7,9,10,11,12,13,15],stack:1,standard:1,start:[5,7,10,12,13,14],state:15,state_dict:15,statement:9,statist:11,step:5,still:[8,9],store:[1,8,13],str:[1,7,8,9,10,11,12,13,15],strand:[9,12,13,15],strand_sid:9,string:[1,5,9,12,15],structur:5,style:15,sub:[1,5,15],subclass:[1,5,9],sublist:15,submit:2,submodul:15,subsequ:5,subset:[5,9,10],substitut:15,successfulli:15,suffix:8,sum:1,summari:11,suppli:[5,9],support:[5,12,15],sure:4,surrounding_sequence_radiu:9,svg:15,symbol:12,tab:8,tabix:[5,9,12,13],tabixerror:13,take:[1,5,13,15],taken:[1,15],target:[0,2,9,10,11,12,15],target_matrix:[9,10],target_path:9,targets_avail:10,targets_kei:10,targets_matrix:[9,10],tbi:13,tell:9,termin:4,test:[5,9,11],test_holdout:9,test_sampl:9,text:1,textiowrapp:8,than:[1,8,9,13,15],thei:[1,5,7,15],them:[5,8],therebi:13,thi:[0,1,4,5,6,7,8,9,10,11,12,13,15],third:1,those:[1,5,8,9,12,15],threshold:[1,13],threshold_lin:1,through:[4,5,15],thu:[13,15],tick:1,ties:11,time:[2,7,15],titl:15,todo:[1,8,9,11,13],togeth:[8,11],top:[1,5,15],torch:[7,11,15],total:[9,10],track:15,train:[1,7,9,11,12,14,15],train_and_valid:11,train_sampl:9,trained_model_path:[7,11],training_loss:11,trainmodel:[5,9],transform:[1,12],tripl:7,truncat:10,tupl:[1,7,9,10,12,15],tutori:[0,3],two:[5,8],txt:15,type:[1,4,5,7,9,10,11,12,13,15],typic:9,uncertain:12,undefin:12,under:5,underli:1,underscor:7,uniqu:8,unk_bas:12,unknown:12,unless:15,unlik:5,unsupport:1,updat:15,use:[1,5,7,8,9,11,12,15],use_cuda:[7,11],use_sequence_nam:7,used:[1,5,8,11,12,15],useful:[1,6,9],user:[1,2,4,5,9,15],uses:[1,5,15],using:[4,5,7,11],usual:1,util:0,v28:1,valid:[5,8,9,11,12],validate_sampl:9,validation_holdout:9,valu:[1,8,11,12,13,15],valueerror:[1,9,12,15],vari:5,variabl:[7,8,9,10,11,12,13,15],variant:[1,5,7,8,14],variant_effect_predict:7,variou:11,vcf:[5,7],vcf_file:7,vector:[8,9,13],verbos:15,version:[1,7],via:5,view:6,vis:1,visual:[1,15],visualize_precision_recall_curv:15,visualize_roc_curv:15,wai:[9,13],want:[1,2,5,8,9,12,15],warn:15,web:1,websit:6,weight:[7,15],welcom:0,well:[9,10],were:[1,15],what:[5,6,7,9,15],when:[7,9,12],where:[1,7,8,9,10,11,12,13,15],wherev:15,whether:[7,9,10,11,12,13,15],which:[1,3,5,7,8,9,10,11,12,13,15],whole:5,width:1,window:9,wise:1,within:[1,9,10,12,13,15],without:[8,15],work:[4,6,7],worth:5,would:[1,4,9,12],wrap:15,wrapper:12,write:[7,8,15],write_feature_scores_to_fil:15,written:[7,8,15],yaml:15,yet:[7,9,14],yfg:15,yfp:[12,15],yml:4,you:[2,4,6,7,8,9,12,14,15],your:[4,7,9,12],yticklabel:1,zero:[12,13]},titles:["Selene documentation","selene_sdk.interpret","Extending Selene","Frequently Asked Questions","Installation","Functional overview of the SDK","Tutorials","selene_sdk.predict","selene.predict.predict_handlers","selene_sdk.samplers","selene_sdk.samplers.file_samplers","selene_sdk","selene_sdk.sequences","selene_sdk.targets","Tutorials","selene_sdk.utils"],titleterms:{"function":5,The:5,Using:5,anaconda:4,analyzesequ:7,api:5,ask:3,bedfilesampl:10,config:15,configur:15,diffscorehandl:8,doc:5,document:0,encoding_to_sequ:12,evalu:5,evaluatemodel:11,execut:15,extend:2,file_sampl:10,frequent:3,from:4,genom:12,genomicfeatur:13,get_indices_and_prob:15,get_reverse_encod:12,heatmap:1,indic:0,initialize_logg:15,initialize_model:15,instal:4,instanti:15,interpret:1,intervalssampl:9,ismresult:1,load_features_list:15,load_model_from_state_dict:15,load_path:15,load_variant_abs_diff_scor:1,logitscorehandl:8,make:5,matfilesampl:10,model:5,multifilesampl:9,nonstrandspecif:15,object:15,onlinesampl:9,oper:15,ordered_variants_and_indic:1,overview:5,parse_configs_and_run:15,performancemetr:15,pip:4,predict:[5,7,8],predict_handl:8,predictionshandl:8,proteom:12,question:3,randompositionssampl:9,rescale_score_matrix:1,run:15,sampl:5,sampler:[5,9,10],sdk:5,selen:[0,2,8,15],selene_sdk:[1,7,9,10,11,12,13,15],sequenc:[5,12],sequence_logo:1,sequence_to_encod:12,sort_standard_chr:1,sourc:4,submodul:5,tabl:0,target:[5,13],train:5,trainmodel:11,tutori:[6,14],util:[5,15],variant_diffs_scatter_plot:1,visual:5,write_to_fil:8,writepredictionshandl:8,writerefalthandl:8,yml:15}})